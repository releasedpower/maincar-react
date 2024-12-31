import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../assets/styles/Sidebar.scss";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className="sidebarWrapper">
      <div className={isActive ? "sidebar" : "toggledSidebar"}>
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
        <button className={`toggleIcon ${isActive ? "" : "toggled"}`} onClick={toggle}>{"<<"}</button>
    </div>
  );
};

export default Sidebar;
