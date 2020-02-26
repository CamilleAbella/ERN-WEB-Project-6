
import React from 'react'

export default class Message extends React.Component {

    render(){
        return (
            <div className="center">
                <h2> {this.props.content} </h2>
            </div>
        )
    }

}