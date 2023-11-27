import React from 'react';
import { Stack, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const UserData = ({ submitHandler, handleChange, data, buttonText }) => {
    const navigate = useNavigate();

    return (
        <Stack direction="row" alignItems="center" mt={4} ml={3}>
            <form onSubmit={submitHandler}>
                <TextField
                    size="small"
                    label="First Name"
                    type="text"
                    value={data.firstName}
                    onChange={(e) => handleChange(e, "firstName")}
                    sx={{ mb: 1 }}
                />
                <TextField
                    size="small"
                    label="Last Name"
                    type="text"
                    value={data.lastName}
                    onChange={(e) => handleChange(e, "lastName")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Age"
                    type="number"
                    value={data.age}
                    onChange={(e) => handleChange(e, "age")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Address"
                    type="text"
                    value={data.address}
                    onChange={(e) => handleChange(e, "address")}
                    sx={{ ml: 1 }}
                />
                <TextField
                    size="small"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange(e, "email")}
                    sx={{ ml: 1 }}
                />
                <Stack direction="row" justifyContent="end" gap={1} mt={1}>
                    <Button variant="contained" type="submit">
                       {buttonText}
                    </Button>
                    <Button variant='contained' size='small' onClick={() => navigate(-1)}>Go Back</Button>
                </Stack>
            </form>
        </Stack>
    )
}