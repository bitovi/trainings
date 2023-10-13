const getYears = require('./stock-value');
const axios = require('axios');

jest.mock('axios');

it('returns the years', async () => {
  axios.get.mockResolvedValue({
    data: ["2020","2021","2022","2023"]
  });

  const title = await getYears();
  expect(title).toEqual(["2020","2021","2022","2023"]);
});
