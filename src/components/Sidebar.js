import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../assets/styles/Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import HistoryIcon from '@mui/icons-material/History';
import logo from '../assets/img/tralala.png';

const Sidebar = ({ isActive }) => {
    return (
        
      <div className="sidebarWrapper">
        <div className={isActive ? "sidebar" : "toggledSidebar"}>
        <div className="logo">
         <Typography variant="h6" className="greet-user" fontStyle={"oblique"} fontWeight={"thin"} color="#ff6f52">
            Maincar
          </Typography>
        </div>
          <List>
            <ListItem button component={NavLink} to={"/"} activeClassName="activeLink">
            <ListItemIcon> <DashboardIcon /> </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={NavLink} to={"/vehicles"} activeClassName="activeLink">
              <ListItemIcon> <DirectionsCarIcon /> </ListItemIcon>
              <ListItemText primary="Vehicles" />
            </ListItem>
            <ListItem button component={NavLink} to={"/tasks"} activeClassName="activeLink">
              <ListItemIcon> <BuildIcon /> </ListItemIcon>
              <ListItemText primary="Maintenance Tasks" />
            </ListItem>
            <ListItem button component={NavLink} to={"/history"} activeClassName="activeLink">
              <ListItemIcon> <HistoryIcon /> </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };

export default Sidebar;
