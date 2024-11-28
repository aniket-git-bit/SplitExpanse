import React from 'react';
import './MainPage.css';
import SideBar from '../SideBar/SideBar';
import CentrePage from '../CentrePage/CentrePage';
import OverView from '../OverViewBar/OverViewPage';

function Pages(){
return (
    <div className='main-page'>
        <SideBar />
        <div className='content-container'>
            <CentrePage />
            <OverView />
        </div>
        
    </div>
)};

export default Pages;