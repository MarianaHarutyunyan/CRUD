import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUsers } from "../store/DataSlice";
import { Stack, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const EditUserData = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.data.data);
    const userToEdit = data.find(user => Number(user.id) === +id);

    const [editedData, setEditedData] = useState(userToEdit || {
        id: null,
        firstName: "",
        lastName: "",
        age: 0,
        address: "",
        email: "",
    });

    const submitHandler = useCallback(() => {
        dispatch(editUsers({ id: userToEdit.id, updatedData: editedData }));
        navigate('/');
    }, [dispatch, editedData, navigate, userToEdit]);

    const handleChange = (e, fieldName) => {
        setEditedData({ ...editedData, [fieldName]: e.target.value });
    }

    if (!userToEdit) {
        return null;
    }

    return (
        <Stack direction="row" alignItems="center" mt={4} ml={3}>
            <form onSubmit={submitHandler}>
                <TextField
                    size="small"
                    label="First Name"
                    type="text"
                    value={editedData.firstName}
                    onChange={(e) => handleChange(e, "firstName")}
                    sx={{ mb: 1 }}
                />
                <TextField
                    size="small"
                    label="Last Name"
                    type="text"
                    value={editedData.lastName}
                    onChange={(e) => handleChange(e, "lastName")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Age"
                    type="number"
                    value={editedData.age}
                    onChange={(e) => handleChange(e, "age")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Address"
                    type="text"
                    value={editedData.address}
                    onChange={(e) => handleChange(e, "address")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Email"
                    type="email"
                    value={editedData.email}
                    onChange={(e) => handleChange(e, "email")}
                    sx={{ ml: 1 }}
                />
                <Stack direction="row" justifyContent="end" gap={1} mt={1}>
                    <Button variant="contained" type="submit">
                        Save
                    </Button>
                    <Button variant='contained' size='small' onClick={() => navigate(-1)}>Go Back</Button>
                </Stack>
            </form>
        </Stack>
    );
}