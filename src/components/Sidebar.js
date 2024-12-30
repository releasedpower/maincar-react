import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={NavLink} to={"/"} activeClassName="active">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to={"/vehicles"} activeClassName="active">
          <ListItemText primary="Vehicles" />
        </ListItem>
        <ListItem button component={NavLink} to={"/tasks"} activeClassName="active">
          <ListItemText primary="Maintenance Tasks" />
        </ListItem>
        <ListItem button component={NavLink} to={"/history"} activeClassName="active">
          <ListItemText primary="History" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
