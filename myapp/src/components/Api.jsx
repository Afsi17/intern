import { FormatBold } from '@mui/icons-material';
import { TableBody, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';
import React, { useState } from 'react'

const Api = () => {
    var [user, setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            //
            console.log(response.data)
            setUser(response.data)
        })
    
    return (
    
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" >NAME</TableCell>
                            <TableCell align="left" >USER NAME</TableCell>
                            <TableCell align="left" >CITY</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return(
                                <TableRow>
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.username }</TableCell>
                                    <TableCell>{val.address.city }</TableCell>
                                </TableRow>
                            )
                        })}
                        
                        
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Api
