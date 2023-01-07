import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
})

export const {
    increment,
    decrement
} = CounterSlice.actions;


export default CounterSlice.reducer