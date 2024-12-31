import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import '../assets/styles/DashboardPage.css'; // Optional custom styling
import SimpleCard from '../components/SimpleCard';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Welcome to Your Car Maintenance Tracker
      </Typography>

      {/* Statistics Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
        <SimpleCard
          title="Upcoming maintenance task"
          count={3}
          description="Reminders this week"
          countColor="#eb653f"
      />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard
            title="Registered Vehicles"
            count={3}
            description="Cars in your garage"
            countColor="#eb653f"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard
              title="Completed Tasks"
              count={3}
              description="Tasks completed"
              countColor="#eb653f"
          />
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            href="/reminders"
            fullWidth
            sx={{
              height: '50px', // Customize height
              backgroundColor: '#eb653f', // Set the background color
              boxShadow: 'none', // Remove shadow
              '&:hover': {
                backgroundColor: '#db6342', // Set hover background color
              },
            }}
          >
            Go to Reminders
          </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            href="/reminders"
            fullWidth
            sx={{
              height: '50px', // Customize height
              // width: '200px',
              backgroundColor: '#4a4a4a', // Set the background color
              boxShadow: 'none', // Remove shadow
              '&:hover': {
                backgroundColor: '#383838', // Set hover background color
              },
            }}
          >
            Manage Vehicles
          </Button>

          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardPage;
