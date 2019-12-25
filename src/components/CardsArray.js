import React from 'react';
import Card from './Card';
import ErrorBoundry from '../containers/ErrorBoundry';

const CardsArray = ({robots}) => {
    return(
        <div className='d-flex justify-content-around flex-wrap mt-3 mb-3'>
            <ErrorBoundry>
                {
                    robots.map(robot => {
                        return (
                                <Card
                                    key={robot.id}
                                    name={robot.name}
                                    email={robot.email}
                                />
                                ) 
                            })
                        }
            </ErrorBoundry>
        </div>
    )
}

export default CardsArray;
