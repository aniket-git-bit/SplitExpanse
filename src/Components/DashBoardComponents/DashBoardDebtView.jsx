import React, { useContext } from 'react';
import YouOwe from './YouOwe';
import YouAreOwed from './YouAreOwed';
import DebtListView from './DebtListView';
import DebtChartView from './DebtChartView';
import { ViewContext } from '../../Contexts/ViewContext';
import './DashBoardDebtView.css';

const DebtOverview = ({ youOwe = 0, youAreOwed = 0, youOweDetails = [], youAreOwedDetails = [] }) => {
  const { view, setView } = useContext(ViewContext); // Use the context

  return (
    <div className="debt-overview">
      <div className="owe-section">
        <YouOwe totalOwe={youOwe} details={youOweDetails} />
        <div className="button-container">
          <button onClick={() => setView('list')}>View as List</button>
          <button onClick={() => setView('chart')}>View as Chart</button>
        </div>
        <YouAreOwed totalOwed={youAreOwed} details={youAreOwedDetails} />
      </div>
      <div className="separator" />
      {view === 'list' ? (
        <DebtListView youOweDetails={youOweDetails} youAreOwedDetails={youAreOwedDetails} />
      ) : (
        <DebtChartView youOweDetails={youOweDetails} youAreOwedDetails={youAreOwedDetails} />
      )}
    </div>
  );
};

export default DebtOverview;
