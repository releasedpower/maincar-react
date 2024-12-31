import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={NavLink} to={"/"}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to={"/vehicles"}>
          <ListItemText primary="Vehicles" />
        </ListItem>
        <ListItem button component={NavLink} to={"/tasks"}>
          <ListItemText primary="Maintenance Tasks" />
        </ListItem>
        <ListItem button component={NavLink} to={"/history"}>
          <ListItemText primary="History" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
