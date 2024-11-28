import React, { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesProvider'; // Adjust the path according to your project structure
import './DebtListView.css';

const DebtListView = () => {
  const { expenses } = useContext(ExpensesContext); // Access expenses from context

  // Prepare data for You Owe and You Are Owed
  const youOweDetails = expenses.filter(expense => expense.amount < 0);
  const youAreOwedDetails = expenses.filter(expense => expense.amount > 0);

  return (
    <div className="list-view">
      <div className="column">
        <h3>You Owe</h3>
        <ul>
          {youOweDetails.map((detail, index) => (
            <li key={index}>
              {detail.nameOrEmail}: ${Math.abs(detail.amount)} {/* Display positive amount */}
            </li>
          ))}
        </ul>
      </div>
      <div className="separator"></div>
      <div className="column">
        <h3>You Are Owed</h3>
        <ul>
          {youAreOwedDetails.map((detail, index) => (
            <li key={index}>
              {detail.nameOrEmail}: ${detail.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DebtListView;
