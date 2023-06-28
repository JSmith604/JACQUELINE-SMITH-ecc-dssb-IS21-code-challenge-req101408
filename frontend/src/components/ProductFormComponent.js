
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ProductFormComponent({ onAddEntry }) {
  // State variables for each form field, do not show form until user clicks call to action button
  const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState('');
  const [productOwnerName, setProductOwnerName] = useState('');
  const [developers, setDevelopers] = useState('');
  const [scrumMasterName, setScrumMasterName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [methodology, setMethodology] = useState('');
  const [lifecycleState, setLifecycleState] = useState('');
  const [location, setLocation] = useState('');

  // Handle form submission
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
    
    //Call the provided callback function to add the entry
    onAddEntry(formData);
    resetForm();
  };

  // Reset form fields
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

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {!showForm && (
        <Button variant="contained" onClick={handleToggleForm}>
          Add New
        </Button>
      )}
      {showForm && (
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
          <Button variant="contained" type="submit">
            Add Entry
          </Button>
        </form>
      )}
    </div>
  );
}

export default ProductFormComponent;
