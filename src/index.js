import React from 'react';
import ReactDOM from 'react-dom';

//import the component
import User from "./components/User";
import UserClass from "./components/UserClass";
//render

ReactDOM.render(
    <React.StrictMode>
        <User name="MERN Stack"/>
        <UserClass name="MERN Stack"/>
        <UserClass name="Daily Tuition"/>
        <UserClass name="Youtube"/>
    </React.StrictMode>,
    document.getElementById("root")
);