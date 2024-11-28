import React from 'react';
import './DashBoardBalanceSection.css';

const DashBoardBalanceSection = ({ expenses }) => {
  const totalOwe = Array.isArray(expenses) ? expenses.reduce((total, exp) => total + (exp.amount > 0 ? exp.amount : 0), 0).toFixed(2) : 0;
  const totalOwed = Array.isArray(expenses) ? expenses.reduce((total, exp) => total + (exp.amount < 0 ? -exp.amount : 0), 0).toFixed(2) : 0;

  return (
    <div className="balance-section">
      <div className="balance-column">
        <h2>Total Balance</h2>
        <p>$0.00</p>
      </div>
      <div className="balance-column">
        <h2>You Owe</h2>
        <p>${totalOwe}</p>
      </div>
      <div className="balance-column">
        <h2>You Are Owed</h2>
        <p>${totalOwed}</p>
      </div>
    </div>
  );
};


export default DashBoardBalanceSection;
