import React, { useContext, useState } from 'react';
import { ExpensesContext } from '../../Contexts/ExpenseContextAPI';
import './AddExpenseModal.css';

const AddExpenseModal = ({ isOpen, onClose }) => {
  const { addExpense } = useContext(ExpensesContext); // Access the addExpense function from context
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    addExpense({ nameOrEmail, description, amount });
    onClose(); // Close modal after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add an Expense</h2>
        <form>
          <div className="form-group">
            <label>Name or Email:</label>
            <input
              type="text"
              value={nameOrEmail}
              onChange={(e) => setNameOrEmail(e.target.value)}
              placeholder="Enter name or email"
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <div className="currency-input">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="save-button" onClick={handleSave}>Save</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseModal;

