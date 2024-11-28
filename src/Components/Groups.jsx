import React, { useState } from 'react';
import './Groups.css'; // Create this CSS file for styling if needed

function Groups() {
    const [groups, setGroups] = useState([]);
    const [newGroupName, setNewGroupName] = useState('');

    const handleAddGroup = () => {
        if (newGroupName.trim()) {
            setGroups([...groups, newGroupName.trim()]);
            setNewGroupName(''); // Clear the input field after adding
        }
    };

    return (
        <div className="groups-container">
            <div className="groups-header">
                <h2>GROUPS</h2>
                <button className="add-button" onClick={handleAddGroup}>+ add</button>
            </div>
            <div className='groups-lists'>
            <input 
                type="text" 
                placeholder="Enter group name" 
                value={newGroupName} 
                onChange={(e) => setNewGroupName(e.target.value)}
                className="group-input"
            />
            <ul className="groups-list">
                {groups.map((group, index) => (
                    <li key={index} className="group-item">{group}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Groups;
