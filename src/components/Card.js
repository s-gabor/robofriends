import React from 'react';

const Card = ({ name, email }) => {
    // if(name === 'Clementine Bauch') {
    //     throw new Error();
    // }
    return (
        <div className='bg-light m-3 shadow rounded grow'>
            <img
                className='rounded-top'
                src={`https://robohash.org/${name}.png?size=220x220&bgset=bg1`}
                alt='robots'
            />
            <div className='text-center'>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
