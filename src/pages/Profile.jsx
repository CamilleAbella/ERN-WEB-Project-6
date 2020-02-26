
import React from 'react'
import Page from './Page'

export default class Profile extends React.Component {

    state = {
        pseudo: this.props.match.params.pseudo
    }

    render(){
        return <Page content={
            <div className="center">
                <h2> Profile de {this.state.pseudo} </h2>
            </div>
        }/>
    }

}