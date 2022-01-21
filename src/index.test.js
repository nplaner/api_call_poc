const fetchData = require('./component/Header.jsx');
const axios = require('axios');

jest.mock('axios');

it('returns the first element in the lumber array', () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: '2021-04-28',
        price: 1423.2,
        open: 1427.8,
        high: 1452.2,
        low: 1417.3,
        volume: '-',
        change_in_pct: '0.19%',
      },
      {
        id: '2021-04-27',
        price: 1420.5,
        open: 1460.7,
        high: 1468.5,
        low: 1374.1,
        volume: '0.23K',
        change_in_pct: '0.00%',
      },
    ],
  });
  const element = fetchData(); // Run the function
  expect(element).toEqual({
    id: '2021-04-28',
    price: 1423.2,
    open: 1427.8,
    high: 1452.2,
    low: 1417.3,
    volume: '-',
    change_in_pct: '0.19%',
  }); // Make an assertion on the result
});
