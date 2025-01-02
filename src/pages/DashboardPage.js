import React from 'react';
import { Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import '../assets/styles/DashboardPage.scss'; // Optional custom styling
import SimpleCard from '../components/SimpleCard';

const DashboardPage = () => {
  const tasks = [
    { vehicle: 'Honda Civic', taskName: 'Oil Change', dueDate: '2025-01-15' },
    { vehicle: 'Toyota Corolla', taskName: 'Tire Rotation', dueDate: '2025-01-20' },
    { vehicle: 'Ford Focus', taskName: 'Brake Inspection', dueDate: '2025-01-22' },
  ];

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  };

  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <div className="summary">
      {/* Statistics Section */}
      <Grid container spacing={9}>
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
      </div>

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
                height: '50px',
                backgroundColor: '#eb653f',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#db6342',
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
                height: '50px',
                backgroundColor: '#4a4a4a',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#383838',
                },
              }}
            >
              Manage Vehicles
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Table Section */}
      <div className="task-table">
        <Typography variant="h5" gutterBottom>
          Maintenance Tasks
        </Typography>
         {/* Table Section */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>
                  Vehicle
                  <ArrowUpward style={{fontSize: 'small', marginLeft: '5px'}} />
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                  Task Name
                  <ArrowDownward style={{fontSize: 'small', marginLeft: '5px'}} />
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                  Due Date
                  <ArrowUpward style={{fontSize: 'small', marginLeft: '5px'}} />
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                  Days Remaining
                  <ArrowDownward style={{fontSize: 'small', marginLeft: '5px'}} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index} className="table-row"> {/* Add hover effect to row */}
                  <TableCell className="table-cell">{task.vehicle}</TableCell> {/* Add hover effect to cell */}
                  <TableCell className="table-cell">{task.taskName}</TableCell>
                  <TableCell className="table-cell">{task.dueDate}</TableCell>
                  <TableCell className="table-cell">{calculateDaysRemaining(task.dueDate)} Days</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DashboardPage;
