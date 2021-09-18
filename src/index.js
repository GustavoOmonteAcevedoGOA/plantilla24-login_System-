import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Rendering from './components/Rendering';

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
        <Rendering/>
        <List/>
    </React.StrictMode>,
    document.getElementById("root")
);