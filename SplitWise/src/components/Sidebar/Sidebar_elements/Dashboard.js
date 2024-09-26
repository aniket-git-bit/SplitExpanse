import React, { useState } from 'react';
import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [view, setView] = useState('list');
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    description: '',
    amount: '',
    persons: [],
  });
  const personsList = [
    { name: 'Person 1', phone: '1234567890' },
    { name: 'Person 2', phone: '0987654321' },
    { name: 'Person 3', phone: '1122334455' },
    // Add more persons with phone numbers as needed
  ];

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  const handleAddExpenseClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      phoneNumber: '',
      description: '',
      amount: '',
      persons: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePersonsChange = (e) => {
    const options = e.target.options;
    const selectedPersons = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedPersons.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      persons: selectedPersons,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, persons, description } = formData;
    const totalAmount = parseFloat(amount);
    const amountPerPerson = totalAmount / persons.length;

    const newExpenses = persons.map(person => ({
      person,
      amount: amountPerPerson,
    }));

    setExpenses((prevExpenses) => [...prevExpenses, ...newExpenses]);
    handleCloseForm();
  };

  const getChartData = () => {
    const youOwe = {};
    const youAreOwed = {};

    expenses.forEach(expense => {
      const { person, amount } = expense;
      if (amount > 0) {
        youOwe[person] = (youOwe[person] || 0) + amount;
      } else {
        youAreOwed[person] = (youAreOwed[person] || 0) + amount;
      }
    });

    return {
      youOwe: Object.entries(youOwe).map(([name, amount]) => ({ name, amount })),
      youAreOwed: Object.entries(youAreOwed).map(([name, amount]) => ({ name, amount })),
    };
  };

  const { youOwe, youAreOwed } = getChartData();

  const chartDataOwe = {
    labels: youOwe.map((entry) => entry.name),
    datasets: [
      {
        label: 'You Owe',
        data: youOwe.map((entry) => entry.amount),
        backgroundColor: '#d5597a',
      },
    ],
  };

  const chartDataOwed = {
    labels: youAreOwed.map((entry) => entry.name),
    datasets: [
      {
        label: 'You Are Owed',
        data: youAreOwed.map((entry) => entry.amount),
        backgroundColor: '#a2d4e0',
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y', // Makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-buttons">
          <button className="expense-button" onClick={handleAddExpenseClick}>Add an Expense</button>
          <button className="settle-button">Settle Up</button>
        </div>
      </div>

      <div className="balance-section">
        <div className="balance-column">
          <h2>Total Balance</h2>
          <p>$0.00</p>
        </div>
        <div className="balance-column">
          <h2>You Owe</h2>
          <p>${expenses.reduce((total, exp) => total + (exp.amount > 0 ? exp.amount : 0), 0).toFixed(2)}</p>
        </div>
        <div className="balance-column">
          <h2>You Are Owed</h2>
          <p>${expenses.reduce((total, exp) => total + (exp.amount < 0 ? -exp.amount : 0), 0).toFixed(2)}</p>
        </div>
      </div>

      <div className="view-buttons">
        <button onClick={() => handleViewChange('list')}>View as List</button>
        <button onClick={() => handleViewChange('chart')}>View Chart</button>
      </div>

      <div className="view-section">
        {view === 'list' ? (
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
        ) : (
          <div className="chart-view">
            <div className="chart-column">
              <h3>You Owe</h3>
              <div className="chart-container">
                <Bar data={chartDataOwe} options={chartOptions} />
              </div>
            </div>
            <div className="chart-column">
              <h3>You Are Owed</h3>
              <div className="chart-container">
                <Bar data={chartDataOwed} options={chartOptions} />
              </div>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <div className="expense-form">
          <button className="close-form" onClick={handleCloseForm}>Close</button>
          <form onSubmit={handleSubmit}>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Write a Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Select Persons:
              <select multiple value={formData.persons} onChange={handlePersonsChange} required>
                {personsList.map((person, index) => (
                  <option key={index} value={person.name}>{person.name}</option>
                ))}
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
