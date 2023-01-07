import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/state/counter/CounterSlice';

const Counter = () => {
    // read initial value from redux store
    const count = useSelector((state) => state.counter.value)

    // use dispatch to send action to redux store
    const dispatch = useDispatch();

    console.log(dispatch)


    return (
        <div className='card shadow'>
            <div className='card-header bg-secondary'>
                <h3 className='text-white'>
                    My Redux Counter
                </h3>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button className='btn btn-success me-3' onClick={() => { dispatch(increment()) }}>Increase</button>
                    <button className='btn btn-danger' onClick={() => { dispatch(decrement()) }}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;