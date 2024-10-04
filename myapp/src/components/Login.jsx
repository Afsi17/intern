import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'

const Login = () => {
  return (
    <div>
          <h1>REGISTRATION</h1>
          <TextField id="filled-basic" label="Enter name" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Password" variant="filled" /><br /><br />
          <Button color='success' variant="contained">Submit </Button>
    </div>
  )
}

export default Login
