import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function ListComponent({ totalProductsCount }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={`Total Products: ${totalProductsCount}`} />
      </ListItem>
    </List>
  );
}

export default ListComponent;
