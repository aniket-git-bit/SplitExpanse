import React, { useState } from 'react';
import './Friends.css'; // Create this CSS file for styling if needed

function Friends() {
    const [friends, setFriends] = useState([]);
    const [newFriendName, setNewFriendName] = useState('');

    const handleAddFriend = () => {
        if (newFriendName.trim()) {
            setFriends([...friends, newFriendName.trim()]);
            setNewFriendName(''); // Clear the input field after adding
        }
    };

    return (
        <div className="friends-container">
            <div className="friends-header">
                <h2>FRIENDS</h2>
                <button className="add-button" onClick={handleAddFriend}>+ add</button>
            </div>
            <div className='friends-lists'>
            <input 
                type="text" 
                placeholder="Enter friend's name" 
                value={newFriendName} 
                onChange={(e) => setNewFriendName(e.target.value)}
                className="friend-input"
            />
            <ul className="friends-list">
                {friends.map((friend, index) => (
                    <li key={index} className="friend-item">{friend}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Friends;
