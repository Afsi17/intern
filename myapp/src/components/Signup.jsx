import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'

export const Signup = () => {
  return (
      <div>
          <h3>SIGN UP</h3>
          <TextField id="filled-basic" label="Enter name" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Age" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Phone" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Adress" variant="filled" /><br /><br />
          <Button color='success' variant="contained">Sign Up</Button>
          

    </div>
  )
}

export default Signup
