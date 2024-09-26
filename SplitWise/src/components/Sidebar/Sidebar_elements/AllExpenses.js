import React, { useState } from 'react';
import './AllExpenses.css'; // Create and customize this CSS file as needed

const initialExpenses = [
  { id: 1, name: 'Lunch with colleagues', amount: 15.00 },
  { id: 2, name: 'Bus ticket', amount: 2.50 },
  { id: 3, name: 'Grocery shopping', amount: 40.00 }
];

const AllExpenses = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  const handleAddExpense = () => {
    if (newExpense.name && newExpense.amount) {
      const newId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
      setExpenses([...expenses, { id: newId, ...newExpense, amount: parseFloat(newExpense.amount) }]);
      setNewExpense({ name: '', amount: '' }); // Clear the input fields
    }
  };

  return (
    <div className="all-expenses">
      <h2>All Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="add-expense-form">
        <h3>Add New Expense</h3>
        <input
          type="text"
          placeholder="Expense name"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default AllExpenses;
