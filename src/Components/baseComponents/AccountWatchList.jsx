import React from 'react';

const AccountWatchlistChart = () => {
  // Sample data
  const data = [
    { account: 'sales', thisMonth: '125,525', ytd: '83,88383' },
    { account: 'Advertising', thisMonth: '150,000', ytd: '900,0000' },
    { account: 'Inventiory', thisMonth: '100,000', ytd: '700,0000' },
    { account: 'Entertainment', thisMonth: '750,00', ytd: '50,00,000' },
    { account: 'Product', thisMonth: '200,000', ytd: '12,0000,00' },
  ];

  return (
    <table className='table table-borderless'>
      <thead>
        <tr>
          <th>Account</th>
          <th>This month</th>
          <th>YTD</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.account}</td>
            <td>{row.thisMonth}</td>
            <td>{row.ytd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountWatchlistChart;
