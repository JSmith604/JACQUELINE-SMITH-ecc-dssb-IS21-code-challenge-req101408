import React from 'react';
import { Button } from '@mui/material';

function AddButton({ onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Add 
    </Button>
  );
}

export default AddButton;
