import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducer: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {
    increment,
    decrement
} = CounterSlice.actions;


export default CounterSlice.reducer