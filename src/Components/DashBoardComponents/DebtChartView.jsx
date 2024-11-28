import React, { useContext } from 'react';
import { ExpensesContext } from '../../Contexts/ExpenseContextAPI'; // Adjust the path according to your structure
import './DebtChartView.css';

const DebtChartView = () => {
  const { expenses } = useContext(ExpensesContext); // Access the expenses from context

  // Prepare data for You Owe and You Are Owed
  const youOweDetails = expenses.filter(expense => expense.amount < 0);
  const youAreOwedDetails = expenses.filter(expense => expense.amount > 0);

  return (
    <div className="chart-view">
      <div className="chart-column">
        <h4>You Owe</h4>
        <div className="chart-placeholder">Chart goes here</div>
        <ul>
          {youOweDetails.map((detail, index) => (
            <li key={index}>
              {detail.nameOrEmail}: ${Math.abs(detail.amount)} {/* Display positive amount */}
            </li>
          ))}
        </ul>
      </div>
      <div className="chart-separator"></div>
      <div className="chart-column">
        <h4>You Are Owed</h4>
        <div className="chart-placeholder">Chart goes here</div>
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

export default DebtChartView;
