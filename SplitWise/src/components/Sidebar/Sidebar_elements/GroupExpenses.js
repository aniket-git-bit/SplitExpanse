import React from 'react';

const GroupExpenses = ({ groupId, groupName }) => {
  return (
    <div>
      <h1>Expenses for {groupName}</h1>
      <p>Here you can manage expenses related to {groupName}.</p>
      {/* Add more details and functionality as needed */}
    </div>
  );
};

export default GroupExpenses;
