import { Button,Typography} from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const SubmitAdder = () => {
        setCount(count + 1)
    }

    const SubmitMinus = () => {
        setCount(count - 1)
    }

  return (
    <div>
          <h1>{count}</h1>
          <Typography variant='h3'>Click to change the values</Typography>
          <Button variant='outlined' onClick={SubmitAdder}>Increment +1</Button>
          <Button variant='contained' onClick={SubmitMinus}>Decrement -1</Button>
    </div>
  )
}

export default Counter
