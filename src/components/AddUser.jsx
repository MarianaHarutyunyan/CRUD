import React, { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from "../store/DataSlice";
import { useNavigate } from 'react-router-dom';
import { UserData } from './UserData';

export const AddUser = () => {

    const [data, setData] = useState({ firstName: "", lastName: "", age: 0, address: "", email: "" });
    const dispatch = useDispatch();
    const id = Math.random();
    const navigate = useNavigate();

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        const { firstName, lastName, age, address, email } = data;

        if (!firstName || !lastName || age === 0 || !address || !email) {
            return;
        }
        const newUser = {
            id: id,
            firstName,
            lastName,
            age,
            address,
            email,
        };
        dispatch(addUsers(newUser));

        setData({
            firstName: "",
            lastName: "",
            age: 0,
            address: "",
            email: "",
        });
        navigate(-1);
    }, [dispatch, navigate, data, id]);

    const handleChange = (e, field) => {
        setData({
            ...data,
            [field]: e.target.value,
        });
    };

    return (
        <UserData submitHandler={submitHandler} handleChange={handleChange} data={data} buttonText="Add New User" />
    )
}