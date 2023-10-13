const axios = require('axios');

async function getYears() {
  const response = await axios.get("https://cowbird-staging.fly.dev/groups/bun-experiment/mocks/years");
  return response.data;
}

module.exports = getYears;