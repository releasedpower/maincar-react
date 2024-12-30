import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import '../assets/styles/HistoryPage.css';

const HistoryPage = () => {
  const [completedTasks, setCompletedTasks] = useState([
    { id: 1, taskName: 'Oil Change', vehicle: 'Toyota Corolla', dateCompleted: '2024-01-15' },
    { id: 2, taskName: 'Tire Rotation', vehicle: 'Honda Civic', dateCompleted: '2024-01-20' },
  ]);

  return (
    <div className="history-page">
      <Typography variant="h4" gutterBottom>
        Maintenance History (Completed Tasks)
      </Typography>

      <Grid container spacing={3}>
        {completedTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.taskName}</Typography>
                <Typography color="textSecondary">Vehicle: {task.vehicle}</Typography>
                <Typography color="textSecondary">Completed On: {task.dateCompleted}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HistoryPage;
