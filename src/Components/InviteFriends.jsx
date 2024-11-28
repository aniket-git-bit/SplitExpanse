import React, {useState} from 'react';


function Invite() {
    const [inviteEmail, setInviteEmail] = useState('');

    const inviteFriend = () => {
        if (inviteEmail.trim()) {
          // Handle invitation logic here
          console.log(`Inviting friend with email: ${inviteEmail}`);
          setInviteEmail(''); // Clear the input field after sending the invitation
        }
      };
      
    return (
        <div className="invite-friend">
        <input
          type="text"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          placeholder="Invite a friend (email)"
        />
        <button onClick={inviteFriend}>Invite</button>
      </div>
    )
};

export default Invite;