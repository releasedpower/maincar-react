import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Topbar.scss';

const Topbar = ({toggleSidebar}) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/login');
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: 'none'}}>
      <Toolbar className="header">
        <div className="title-toggle">
          <button
              className="hamburger"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
            ☰
          </button>
          <Typography variant="h6" className="header-title">
            Car Maintenance Tracker
          </Typography>
        </div>

        <div className="header-actions">
          <Typography variant="h6" className="greet-user">
            Hi, Mister
          </Typography>
          <Button
            variant="contained"
            startIcon={<ExitToApp />}
            onClick={handleSignOut}
            sx={{
              backgroundColor:'#474747',
            }}
          >
            Sign Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
