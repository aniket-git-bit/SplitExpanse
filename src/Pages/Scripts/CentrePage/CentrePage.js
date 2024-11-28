import React, { useState } from 'react';
import './CentrePage.css';
import DashBoard from '../SideBar/DashBoard';
import SideBar from '../SideBar/SideBar';
import Invite from '../SideBar/InviteFriends';
import RecentActivities from '../SideBar/RecentActivities';
import AllExpenses from '../SideBar/AllExpenses';

function CentrePage() {
    const [currentPage, setCurrentPage] = useState('dashboard'); // Default page

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashBoard />;
            case 'recentActivities':
                return <RecentActivities />;
            case 'invite':
                return <Invite />;
            case 'AllExpenses':
                return <AllExpenses />
            default:
                return <DashBoard />;
        }
    };

    return (
        <div className="centre-page">
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="content">
                {renderPage()}
            </div>
        </div>
    );
}

export default CentrePage;
