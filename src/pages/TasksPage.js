import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import '../assets/styles/TasksPage.css';

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'Oil Change', vehicle: 'Toyota Corolla', dueDate: '2024-02-01', status: 'Pending' },
    { id: 2, taskName: 'Tire Rotation', vehicle: 'Honda Civic', dueDate: '2024-03-15', status: 'Pending' },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newTask, setNewTask] = useState({ taskName: '', vehicle: '', dueDate: '', status: 'Pending' });

  const handleAddTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setOpenDialog(false);
    setNewTask({ taskName: '', vehicle: '', dueDate: '', status: 'Pending' });
  };

  return (
    <div className="maintenance-tasks-page">
      <Typography variant="h4" gutterBottom>
        Maintenance Tasks
      </Typography>

      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.taskName}</Typography>
                <Typography color="textSecondary">Vehicle: {task.vehicle}</Typography>
                <Typography color="textSecondary">Due Date: {task.dueDate}</Typography>
                <Typography color="textSecondary">Status: {task.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        onClick={() => setOpenDialog(true)}
      >
        Add Task
      </Button>

      {/* Add Task Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Maintenance Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            value={newTask.taskName}
            onChange={(e) => setNewTask({ ...newTask, taskName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Vehicle Name"
            type="text"
            fullWidth
            value={newTask.vehicle}
            onChange={(e) => setNewTask({ ...newTask, vehicle: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddTask} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TasksPage;
