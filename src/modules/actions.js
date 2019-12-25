import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const searchAction = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestAction = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    
    const customUsers = [
        {
            id: 1000,
            name: 'Ali'
        },
        {
            id: 1001,
            name: 'Ale'
        },
        {
            id: 1002,
            name: 'Ane'
        }
    ];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            for (let user of customUsers) {
                users.push({ id: user.id, name: user.name, email: user.name + '@mail.com' });
            };            
            dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users })
        })
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
