import React from "react";
import { TableContainer, Table, TableCell, TableHead, TableBody, Paper, TableRow, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { removeUsers } from "../store/DataSlice";
import { useNavigate } from 'react-router-dom';

export const UsersList = () => {
    const usersData = useSelector((state) => state.data.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!usersData || usersData.length === 0) {
        return (
            <Typography>No user data available.</Typography>
        );
    }

    return (
        <TableContainer component={Paper} sx={{ mt: 1 }}>
            <Button variant="contained" size="small" sx={{ m: 2 }} onClick={() => navigate('user/add')}>Add User</Button>
            <Table sx={{ minWidth: 650, p: 2 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersData.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ pl: 3 }}>
                                {user.firstName}
                            </TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" size="small" onClick={() => navigate('/user/edit/' + user.id)}>edit</Button>
                                <Button variant="contained" size="small" sx={{ ml: 1 }} onClick={() => dispatch(removeUsers(user.id))}>delete</Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}