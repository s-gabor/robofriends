import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '615px', border: '1px solid black'}} className='shadow'>
            {props.children}
        </div>
    );
};

export default Scroll;
