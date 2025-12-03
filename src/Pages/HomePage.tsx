
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DropdownMenu from '../Components/DropdownMenu';

export default function HomePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ATEX PERFORMANCE DASHBOARD
          </Typography>
          {/* Main Navigation Buttons */}
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/kpi">KPI</Button>
          <Button color="inherit" component={Link} to="/test-throughput">Test Throughput</Button>
          
          {/* Dropdown for Other Modules */}
          <DropdownMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
