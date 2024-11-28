import React from 'react';

const YouAreOwed = ({ totalOwed, details }) => {
  return (
    <div className="owed-details">
      <h2>You Are Owed</h2>
      <p>${totalOwed}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.person}: ${detail.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouAreOwed;
