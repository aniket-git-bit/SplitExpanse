
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [activeContent, setActiveContent] = useState('');

  return (
    <div className="app">
      <Navbar />
      <Sidebar setActiveContent={setActiveContent} />
      <Mainpage content={activeContent} />
    </div>
  );
};

export default App;
