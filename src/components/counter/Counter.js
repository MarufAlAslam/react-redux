import React from 'react';

const Counter = () => {
    return (
        <div className='card shadow'>
            <div className='card-header bg-secondary'>
                <h3 className='text-white'>
                    My Redux Counter
                </h3>
            </div>
            <div className='card-body'>
                <h1>00</h1>
                <div className='my-4'>
                    <button className='btn btn-success me-3'>Increase</button>
                    <button className='btn btn-danger'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;