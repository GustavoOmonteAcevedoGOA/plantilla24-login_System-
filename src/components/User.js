import React from 'react';
import ReactDOM from 'react-dom';


//functional React component
const name ="User Functional Component"
export default function User (){
    return(
        <div className="app">
            <h2>{setInterval(tick, 1000)}</h2>
        </div>
    )
}


function tick(){
    const element=(
        <h2>it is {new Date().toLocaleTimeString()}</h2>
    )
    ReactDOM.render(element,document.getElementById("root"))
}