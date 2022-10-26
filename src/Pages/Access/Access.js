import React from 'react';

const Access = ({name}) => {
    return (
        <div>
            <h1 className='text-3xl'>Checkout page</h1>
            <p className='text-2xl font-serif font-bold'>You are about to buy the course {name}</p>
        </div>
    );
};

export default Access;