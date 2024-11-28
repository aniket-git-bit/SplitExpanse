import React from 'react';
import './App.css';
import Mainpage from './Pages/Scripts/MainPage/MainPage';
import NavBar from './Pages/Scripts/NavBar/NavBar'
import { ExpensesProvider } from './Contexts/ExpenseContextAPI';
import { ViewProvider } from './Contexts/ViewContext';

function App() {
  return (
    <div className="App">
      <ViewProvider>
      <ExpensesProvider>
          < NavBar />
          < Mainpage/>
      </ExpensesProvider>
      </ViewProvider>
    </div>
  );
}

export default App;
