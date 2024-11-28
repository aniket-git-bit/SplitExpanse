import React, { useState } from 'react';
import AddExpenseModal from './AddExpenseModal';
import './DashBoardHeader.css';

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddExpense = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleSaveExpense = (expenseData) => {
    console.log('Expense saved:', expenseData);
    // You can add your save logic here
  };

  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="dashboard-buttons">
        <button className="expense-button" onClick={handleAddExpense}>Add an Expense</button>
        <button className="settle-button">Settle Up</button>
      </div>
      <AddExpenseModal 
        isOpen={isModalOpen} 
        onClose={handleAddExpense} 
        onSave={handleSaveExpense} 
      />
    </div>
  );
};

export default DashboardHeader;
