import React from 'react';

const SearchBox = (props) => {
    return(
        <div className='form-inline justify-content-center pt-3 pb-3'>
            <input
                aria-label='Search Robots'
                className='form-control'
                type='search' 
                placeholder='Search robots'
                onChange={props.onSearchChange}
            />
        </div>
    )
}

export default SearchBox;
