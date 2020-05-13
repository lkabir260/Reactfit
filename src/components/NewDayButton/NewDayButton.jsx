import React from 'react';

const NewDayButton= (props) => (
    <button
    className='btn btn-default'
    onClick={props.handleNewDayClick}
    >
    Next Day
    </button>
);

export default NewDayButton;