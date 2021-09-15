import React from 'react';
import ReactDOM from 'react-dom';

import ClockClass from './ClockClass';

//functional React component
const name ="User Functional Component"
export default function User (props){
    return(
        <div className="App">
            <ClockClass/>
        </div>
    )
}