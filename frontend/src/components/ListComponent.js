import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function ListComponent() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="List Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="List Item 2" />
      </ListItem>
      {/* Add more ListItems as needed */}
    </List>
  );
}

export default ListComponent;
