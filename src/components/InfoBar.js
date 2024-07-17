import React, { useState } from 'react';
import closeIcon from '../icons/closeIcon.png';
import SimpleDialog from './SimpleDialog';
import Avatar from '@mui/material/Avatar';
import { StyledBadge } from './share/StyledBadge';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const InfoBar = ({ users, name, room, image }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [value, setValue] = useState(false);

  const handleDialog = () => {
    setValue(!value);
  };

  const handleDialogClose = () => {
    setValue(false);
  };

  const handleLeaveChatDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleLeaveChatDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLeaveChat = () => {
    setDialogOpen(false);
    window.location.href = '/';
    localStorage.removeItem('name');
    localStorage.removeItem('room');
    localStorage.removeItem('photo');
  };

  return (
    <div className="infoBar">
      <SimpleDialog open={value} onClose={handleDialogClose} users={users} />
      <div className="leftInnerContainer">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={image} />
        </StyledBadge>&nbsp;
        <div className="usernameAndParticipants">
          <h5>
            <b style={{ color: '#000' }}>@{name?.toUpperCase()}</b>
          </h5>
          <p onClick={handleDialog} style={{ cursor: "pointer", color: '#000', margin: 0 }}>participants: {users.length}</p>
        </div>
      </div>
      <div className="rightInnerContainer">
        <div onClick={handleLeaveChatDialogOpen}>
          <img src={closeIcon} alt="close icon" style={{ width: '15px', height: '15px', marginRight: '5px' }} />
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={handleLeaveChatDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Leave the ${room}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to leave the {room}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLeaveChatDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLeaveChat} color="secondary" autoFocus>
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfoBar;
