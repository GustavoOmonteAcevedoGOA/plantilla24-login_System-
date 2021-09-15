import React from 'react';
import ReactDOM from 'react-dom';


//functional React component
const name ="User Functional Component"
export default function User (props){
    return(
        <div className="app">
            <h2>this is {props.name}</h2>
        </div>
    )
}