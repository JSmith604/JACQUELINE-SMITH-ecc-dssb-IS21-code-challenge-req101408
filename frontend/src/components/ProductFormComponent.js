import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ProductFormComponent({ onAddEntry }) {
  const [productName, setProductName] = useState('');
  const [productOwnerName, setProductOwnerName] = useState('');
  const [developers, setDevelopers] = useState('');
  const [scrumMasterName, setScrumMasterName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [methodology, setMethodology] = useState('');
  const [lifecycleState, setLifecycleState] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      productName,
      productOwnerName,
      developers: developers.split(',').map(developer => developer.trim()),
      scrumMasterName,
      startDate,
      methodology,
      lifecycleState,
      location,
    };

    onAddEntry(formData);
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setProductOwnerName('');
    setDevelopers('');
    setScrumMasterName('');
    setStartDate('');
    setMethodology('');
    setLifecycleState('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <TextField
        label="Product Owner Name"
        value={productOwnerName}
        onChange={(e) => setProductOwnerName(e.target.value)}
        required
      />
      <TextField
        label="Developers (comma-separated)"
        value={developers}
        onChange={(e) => setDevelopers(e.target.value)}
        required
      />
      <TextField
        label="Scrum Master Name"
        value={scrumMasterName}
        onChange={(e) => setScrumMasterName(e.target.value)}
        required
      />
      <TextField
        label="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <TextField
        label="Methodology"
        value={methodology}
        onChange={(e) => setMethodology(e.target.value)}
        required
      />
      <TextField
        label="Lifecycle State"
        value={lifecycleState}
        onChange={(e) => setLifecycleState(e.target.value)}
        required
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Add Entry</Button>
    </form>
  );
}

export default ProductFormComponent;

