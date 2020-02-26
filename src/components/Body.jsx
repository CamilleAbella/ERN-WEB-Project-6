import React from 'react'

export default class Body extends React.Component {

    render(){
        return (
            <main className="body">
                {this.props.content}
            </main>
        )
    }

}
