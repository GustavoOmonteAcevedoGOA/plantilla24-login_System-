import React, { Component } from 'react'

export default class Rendering extends Component {

    constructor(props){
        super(props)
        this.state = { isLoggedln : false }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick()
    {
        this.setState({ isLoggedln : true})
    }
    handleLogoutClick()
    {
        this.setState({ isLoggedln : false})

    }

    render() {
        const isLoggedln = this.state.isLoggedln;
        let button;

        if(isLoggedln)
        {

            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } 
        else
        {
            
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div className="App">
                <Greetings isLoggedln={isLoggedln}/>
                {button}
            </div>
        )
    }
}

//for login
function LoginButton(props)
{
    return (
        <button onClick={props.onClick}>
            Llogin
        </button>
    )
}

//for logout
function LogoutButton(props)
{
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

//For greetings
function Greetings(props){
    if(props.isLoggedln){
        return(
            <h2>Successfully log In...</h2>
        )
    }else{
        return(
            <h2>Logout Successfully...</h2>
        )
    }

}