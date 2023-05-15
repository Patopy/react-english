import * as React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import {Link as RouterLink}  from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MenuBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">

        <Link component={RouterLink} underline="hover" color="inherit" 
              to="/cardone">
          Card
        </Link>
        <Link
          component={RouterLink}
          underline="hover"
          color="inherit"
          to="/listartodos/"
        >
          Listar Todos
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      
      </Breadcrumbs>
    </div>
  );
}