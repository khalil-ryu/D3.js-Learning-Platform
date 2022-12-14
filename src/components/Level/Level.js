import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import "level.css";
function Level() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
    <div className= "level">
      <Link to="/level0">
        <Button variant="outlined" size="medium">0</Button>
      </Link>
      <Link to="/level1">
        <Button variant="outlined" size="medium">1</Button>
      </Link>
      <Link to="/level2">
        <Button variant="outlined" size="medium">2</Button>
      </Link> 
      <Link to="/level3">
        <Button variant="outlined" size="medium">3</Button>
      </Link>    
    </div>
    </Box>

  );
}

export default Level;
