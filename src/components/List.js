import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props)
        this.number =[1,2,3,4,5]
    }
    render() {
        //using map iterate method
        const listItems = this.number.map(number =>{
            return <ListItem key={number.toString} value={number}/>
        })
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}


//listItem
function ListItem(props){
    const value = props.value;
    return(
        <li>{value}</li>
    )
}