import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, Setname] = useState("Afsinh")
    var [Word, Setword] = useState(0)
    const HandleInput = (e) => {
        console.log(e.target.value)
        Setname(e.target.value)
    }
    const SubmitHandler = () => {
        Setword(name)
    }
    return (
        <div>
            <br />
            <Typography variant='h3'>Welcome{Word}</Typography> 
            <TextField variant='outlined' onChange={HandleInput} />
            <Button variant='contained' onClick={SubmitHandler}>Submit</Button>
        </div>
          
    )
}

export default StateBasics
