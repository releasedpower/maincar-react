import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import '../assets/styles/VehiclesPage.css';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'Toyota Corolla', mileage: 12000 },
    { id: 2, name: 'Honda Civic', mileage: 18000 },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ name: '', mileage: '' });

  const handleAddVehicle = () => {
    setVehicles([...vehicles, { id: vehicles.length + 1, ...newVehicle }]);
    setOpenDialog(false);
    setNewVehicle({ name: '', mileage: '' });
  };

  return (
    <div className="vehicles-page">
      <Typography variant="h4" gutterBottom>
        Manage Your Vehicles
      </Typography>

      <Grid container spacing={3}>
        {vehicles.map((vehicle) => (
          <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{vehicle.name}</Typography>
                <Typography color="textSecondary">Mileage: {vehicle.mileage} km</Typography>
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
        Add Vehicle
      </Button>

      {/* Add Vehicle Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Vehicle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Vehicle Name"
            type="text"
            fullWidth
            value={newVehicle.name}
            onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Mileage (km)"
            type="number"
            fullWidth
            value={newVehicle.mileage}
            onChange={(e) => setNewVehicle({ ...newVehicle, mileage: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddVehicle} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VehiclesPage;
