import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import '../assets/styles/DashboardPage.css'; // Optional custom styling

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Welcome to Your Car Maintenance Tracker
      </Typography>

      {/* Statistics Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Upcoming maintenance task</Typography>
              <Typography variant="h4" color="primary">
                3
              </Typography>
              <Typography color="textSecondary">Reminders this week</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Registered Vehicles</Typography>
              <Typography variant="h4" color="primary">
                2
              </Typography>
              <Typography color="textSecondary">Cars in your garage</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Completed Tasks</Typography>
              <Typography variant="h4" color="primary">
                15
              </Typography>
              <Typography color="textSecondary">Tasks completed</Typography>
            </CardContent>
          </Card>
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
              color="primary"
              fullWidth
              href="/reminders"
            >
              View Reminders
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href="/vehicles"
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
