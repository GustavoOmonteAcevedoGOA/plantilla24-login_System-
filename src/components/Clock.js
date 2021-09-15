import React from 'react'

export default function Clock(props) {
    return (
        <div className="App">
            <h2>{props.date.toLocaleTimeString()}</h2>
        </div>
    )
}
