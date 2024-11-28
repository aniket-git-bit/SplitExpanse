// src/context/ExpensesContext.js
import React, { createContext, useState, useContext } from 'react';

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [youOweDetails, setYouOweDetails] = useState([]);
  const [youAreOwedDetails, setYouAreOwedDetails] = useState([]);

  const addExpense = (newExpense) => {
    setYouOweDetails(prevDetails => [...prevDetails, newExpense]);
  };

  return (
    <ExpensesContext.Provider value={{ youOweDetails, youAreOwedDetails, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);
