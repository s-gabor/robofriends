import React from 'react';

const SearchBox = (props) => {
    return(
        <div className='form-inline justify-content-center pt-3 pb-3'>
            <label>
                <input
                    className='form-control'
                    type='search'
                    placeholder='Search robots'
                    onChange={props.onSearchChange}
                />
            </label>
        </div>
    )
}

export default SearchBox;
