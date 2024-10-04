import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React from 'react'

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography> 
          <Link to='/login'>
          <Button color="success" variant='contained'>Login</Button></Link> &nbsp;
          <Link to='/signup'>
            <Button color="success" variant='contained'>Register</Button></Link>  &nbsp;
          <Link to='/s'>
            <Button color="success" variant='contained'>StateBasix</Button></Link>  &nbsp;
        <Link to='/c'>
            <Button color="success" variant='contained'>Counter</Button></Link>  &nbsp;
          <Link to='/ap'>
            <Button color="success" variant='contained'>Data Api</Button></Link>  &nbsp;
          <Link to='/pa'>
            <Button color="success" variant='contained'>Card</Button></Link>  &nbsp;
        </Toolbar>
        
      </AppBar>
      

    </Box>
   
  )
}

export default Appbar

