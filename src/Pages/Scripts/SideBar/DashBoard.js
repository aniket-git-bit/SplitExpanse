import React, { useState } from 'react';
import './DashBoard.css';
import DashboardHeader from '../../../Components/DashBoardComponents/DashBoardHeader';
import DashBoardBalanceSection from '../../../Components/DashBoardComponents/DashBoardBalanceSection';
import DebtOverview from '../../../Components/DashBoardComponents/DashBoardDebtView';

const DashBoard = () => {
    return(
      <div>
        <DashboardHeader />
        <DashBoardBalanceSection />
        <DebtOverview />
      </div>
    )
};

export default DashBoard;
