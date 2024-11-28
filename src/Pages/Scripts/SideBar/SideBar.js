import React from 'react';
import './SideBar.css';
import Groups from '../../../Components/Groups';
import Friends from '../../../Components/Friends';

function SideBar({ setCurrentPage }) {
    return (
        <div className='sidebar'>
            <h1>Dashboard</h1>
            <ul>
                <li onClick={() => setCurrentPage('dashboard')}>Dashboard</li>
                <li onClick={() => setCurrentPage('recentActivities')}>Recent Activities</li>
                <li onClick={() => setCurrentPage('AllExpenses')}>All Expenses</li>
                <li onClick={() => setCurrentPage('invite')}>Invite Friends</li>
            </ul>
            <Groups />
            <Friends />
        </div>
    );
}

export default SideBar;
