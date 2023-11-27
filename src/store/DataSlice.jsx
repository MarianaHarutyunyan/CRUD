import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        removeUsers(state, action) {
            state.data = state.data.filter(user => user.id !== action.payload);
        },
        addUsers(state, action) {
            state.data.push(action.payload);
        },
        editUsers(state, action) {
            const { id, updatedData } = action.payload;
            const index = state.data.findIndex(user => user.id === id);
            if (index !== -1) {
                state.data[index] = { ...state.data[index], ...updatedData };
            }
        }
    },
});

export const { setData, removeUsers, addUsers, editUsers } = dataSlice.actions;
export default dataSlice.reducer;