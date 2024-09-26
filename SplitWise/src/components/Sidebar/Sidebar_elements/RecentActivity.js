import React from 'react';
import './RecentActivity.css';

const RecentActivity = ({ recentActivities = [] }) => {
  // Check if recentActivities is an array and has a length property
  if (!Array.isArray(recentActivities)) {
    return <div>Error: recentActivities should be an array.</div>;
  }

  return (
    <div className="recent-activities">
      <h2>Recent Activities</h2>
      {recentActivities.length === 0 ? (
        <p>No recent activities to show.</p>
      ) : (
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>
              <p>{activity.description}</p>
              <p>Amount: ${activity.amount.toFixed(2)}</p>
              <p>Persons: {activity.persons.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivity;
