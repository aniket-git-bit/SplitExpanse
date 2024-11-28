import React from 'react';
import './LoginModal.css'; // Create this CSS file for styling
import Login from './Login';

function LoginModal({ show, onClose }) {
  if (!show) return null; // Don't render if `show` is false

   // Handle click outside the modal content
   const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <Login onClose={onClose} />
      </div>
    </div>
  );
}

export default LoginModal;
