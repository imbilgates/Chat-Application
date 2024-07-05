import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

const InfoBar = ({ room }) => {
  const handleLeaveChat = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('room');
  };

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/" onClick={handleLeaveChat}><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
};

export default InfoBar;