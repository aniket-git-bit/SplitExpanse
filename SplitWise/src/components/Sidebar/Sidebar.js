import React, { useState } from 'react';
import './Sidebar.css';
import searchIcon from '../../pics/search-icon.png';
import dashboardIcon from '../../pics/dashboard.png';
import recentIcon from '../../pics/recent_activity.png';
import allIcon from '../../pics/all.png';
import groupIcon from '../../pics/group_icon.ico';
import friendIcon from '../../pics/friends_icon.ico';
import Dashboard from './Sidebar_elements/Dashboard';
import RecentActivity from './Sidebar_elements/RecentActivity';
import AllExpenses from './Sidebar_elements/AllExpenses';
import GroupExpenses from './Sidebar_elements/GroupExpenses'; // Import GroupExpenses
import FriendExpenses from './Sidebar_elements/FriendExpenses'; // Import FriendExpenses

const Sidebar = ({ setActiveContent }) => {
  const [groupItems, setGroupItems] = useState([
    { id: 1, name: 'Group 1', icon: groupIcon, link: '#group1' },
    { id: 2, name: 'Group 2', icon: groupIcon, link: '#group2' },
  ]);

  const [newGroup, setNewGroup] = useState('');
  const [friends, setFriends] = useState([
    { id: 1, name: 'Shibang', icon: friendIcon, link: '#shibang' },
    { id: 2, name: 'Pranav', icon: friendIcon, link: '#pranav' },
  ]);
  const [newFriend, setNewFriend] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');

  // Function to add a new group
  const addGroup = () => {
    if (newGroup.trim()) {
      const newId = groupItems.length + 1;
      setGroupItems([...groupItems, { id: newId, name: newGroup, icon: groupIcon, link: `#group${newId}` }]);
      setNewGroup(''); // Clear the input field after adding the item
    }
  };

  // Function to add a new friend
  const addFriend = () => {
    if (newFriend.trim()) {
      const newId = friends.length + 1;
      setFriends([...friends, { id: newId, name: newFriend, icon: friendIcon, link: `#friend${newId}` }]);
      setNewFriend(''); // Clear the input field after adding the item
    }
  };

  // Function to invite a new friend
  const inviteFriend = () => {
    if (inviteEmail.trim()) {
      // Handle invitation logic here
      console.log(`Inviting friend with email: ${inviteEmail}`);
      setInviteEmail(''); // Clear the input field after sending the invitation
    }
  };

  const handleClick = (content, id, name) => {
    switch (content) {
      case 'Dashboard':
        setActiveContent(<Dashboard />);
        break;
      case 'Recent Activity':
        setActiveContent(<RecentActivity />);
        break;
      case 'All Expenses':
        setActiveContent(<AllExpenses />);
        break;
      case 'Group':
        setActiveContent(<GroupExpenses groupId={id} groupName={name} />);
        break;
      case 'Friend':
        setActiveContent(<FriendExpenses friendId={id} friendName={name} />);
        break;
      default:
        setActiveContent(''); // Default case
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li><a href="#Dashboard" onClick={() => handleClick('Dashboard')}><img src={dashboardIcon} alt="dashboard" className="dashboard-icon" />Dashboard</a></li>
        <li><a href="#Recent Activity" onClick={() => handleClick('Recent Activity')}><img src={recentIcon} alt="recent activity" className="dashboard-icon" />Recent Activity</a></li>
        <li><a href="#All Expenses" onClick={() => handleClick('All Expenses')}><img src={allIcon} alt="all expenses" className="dashboard-icon" />All Expenses</a></li>
      </ul>
      <div className="sidebar-search">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Filter by name" className="search-input" />
      </div>
      <ul>
        <section>
          <h2>GROUPS</h2>
          <div className="group-section">
            <ul>
              {groupItems.map(item => (
                <li key={item.id}>
                  <a href={item.link} onClick={() => handleClick('Group', item.id, item.name)}>
                    <img src={item.icon} alt={item.name} className="group-icon" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="Enter new group"
          />
          <button onClick={addGroup}>Add Group</button>
        </section>

        <section>
          <h2>FRIENDS</h2>
          <div className="friend-section">
            <ul>
              {friends.map(item => (
                <li key={item.id}>
                  <a href={item.link} onClick={() => handleClick('Friend', item.id, item.name)}>
                    <img src={item.icon} alt={item.name} className="group-icon" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            value={newFriend}
            onChange={(e) => setNewFriend(e.target.value)}
            placeholder="Enter new friend"
          />
          <button onClick={addFriend}>ADD FRIEND</button>
        </section>
      </ul>

      <div className="invite-friend">
        <input
          type="text"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          placeholder="Invite a friend (email)"
        />
        <button onClick={inviteFriend}>Invite</button>
      </div>
    </div>
  );
};

export default Sidebar;
