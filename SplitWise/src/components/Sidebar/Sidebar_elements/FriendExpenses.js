import React from 'react';

const FriendExpenses = ({ friendId, friendName }) => {
  return (
    <div>
      <h1>Expenses with {friendName}</h1>
      <p>Here you can manage expenses related to {friendName}.</p>
      {/* Add more details and functionality as needed */}
    </div>
  );
};

export default FriendExpenses;
