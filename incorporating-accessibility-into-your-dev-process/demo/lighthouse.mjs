import { spawn } from 'child_process';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import lighthouse from 'lighthouse';
import path from 'path';

const ACCESSIBILITY_THRESHOLD = 0.9;
const LIGHTHOUSE_REPORT_PATH = 'lighthouse-report.html';

try {
    const accessibilityScore = await launchPreview();
    const scoreMeetsThreshold = accessibilityScore >= ACCESSIBILITY_THRESHOLD;
    if (scoreMeetsThreshold) {
        console.info(`Accessibility score ${accessibilityScore * 100} meets threshold ${ACCESSIBILITY_THRESHOLD * 100}.`)
        process.exit(0);
    } else {
        console.error(`Accessibility score ${accessibilityScore * 100} does not meet threshold ${ACCESSIBILITY_THRESHOLD * 100}.`)
        process.exit(1);
    }
} catch (error) {
    console.error('Caught error:', error);
    process.exit(1);
}

function extractLocalhostUrl(data) {
    const match = data.match(/Local:   (http:\/\/localhost:\d+\/)/);
    return match && match[1];
}

async function launchPreview() {
    return new Promise((resolve, reject) => {
        const previewProcess = spawn(path.join('.', 'node_modules', '.bin', 'vite'), ['preview']);

        previewProcess.stdout.on('data', async (data) => {
            const dataAsString = data.toString();
            console.info(dataAsString);

            const localhostUrl = extractLocalhostUrl(dataAsString);

            if (localhostUrl && dataAsString.includes(localhostUrl)) {
                const score = await runLighthouseTests(localhostUrl);
                previewProcess.kill('SIGTERM');
                resolve(score);
            }
        });

        previewProcess.stderr.on('data', (data) => {
            console.error(`Preview process emitted stderr: ${data}`);
        });

        previewProcess.on('close', (code) => {
            console.info(`Preview process exited with code: ${code}`);
        });

        previewProcess.on('error', (error) => {
            reject(error);
        });
    });
}

async function runLighthouseTests(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'html', onlyCategories: ['accessibility'], port: chrome.port };
    const runnerResult = await lighthouse(url, options);

    fs.writeFileSync(LIGHTHOUSE_REPORT_PATH, runnerResult.report);

    console.info(`Lighthouse report completed for ${runnerResult.lhr.finalDisplayedUrl}`);

    await chrome.kill();

    return runnerResult.lhr.categories.accessibility.score;
}