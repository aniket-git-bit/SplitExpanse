import React from 'react';

const ListView = ({ youOwe, youAreOwed }) => {
  return (
    <div className="list-view">
      <div className="column">
        <h3>You Owe</h3>
        {youOwe.map((entry, index) => (
          <p key={index}>{entry.name}: ${entry.amount.toFixed(2)}</p>
        ))}
      </div>
      <div className="column">
        <h3>You Are Owed</h3>
        {youAreOwed.map((entry, index) => (
          <p key={index}>{entry.name}: ${entry.amount.toFixed(2)}</p>
        ))}
      </div>
    </div>
  );
};

export default ListView;
