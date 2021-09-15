import React from 'react';
import ReactDOM from 'react-dom';

//import the component
import User from "./components/User";
//render

ReactDOM.render(
    <React.StrictMode>
        <User/>
    </React.StrictMode>,
    document.getElementById("root")
);