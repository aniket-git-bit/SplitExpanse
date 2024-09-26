
import React from 'react';
import './Mainpage.css';

const Mainpage = ({ content }) => {
  return (
    <div className="main-page">

      <section>
        {content ? (
          <div>{content}</div>
        ) : (
          <>
            <h2>Features</h2>
            <ul>
              <li>Track your expenses</li>
              <li>Split bills with friends</li>
              <li>Analyze your spending habits</li>
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Mainpage;
