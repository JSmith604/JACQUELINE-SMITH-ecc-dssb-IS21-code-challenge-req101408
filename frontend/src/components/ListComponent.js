import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

// Display total number of products in table on the page
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
