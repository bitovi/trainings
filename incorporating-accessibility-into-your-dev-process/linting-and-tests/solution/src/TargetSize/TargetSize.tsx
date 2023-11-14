import React from "react";

import styles from "./TargetSize.module.css";

const TargetSize = () => {
    return (
        <section className={styles.targetSize}>
            <h2>Target size</h2>
            <p>You can find Bitovi on:</p>
            <ul>
                <li>
                    <a href="https://github.com/bitovi">
                        <img alt="GitHub" height="24" src="./github.png" width="25" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/bitovi">
                        <img alt="LinkedIn" height="24" src="./linkedin.png" width="25" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/bitovi">
                        <img alt="Twitter" height="24" src="./twitter.png" width="24" />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default TargetSize;