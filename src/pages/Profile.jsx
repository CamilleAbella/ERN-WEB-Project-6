
import React from 'react'
import axios from 'axios'
import Page from './Page'
import config from '../config.json'

export default class Profile extends React.Component {

    state = {
        username: ''
    }

    fetchUser(){
        axios.get( config.api + 'profile', {
            headers: { Authorization: 'Bearer ' + this.props.token }
        })
            .then( res => {
                if(res.status === 200)
                this.setState({ username: res.data.username })
            })
            .catch(console.error)
    }

    componentDidMount(){
        this.fetchUser()
    }

    render(){
        if(this.state.username)
        return <Page content={
            <div className="center">
                <h2> Profile de {this.state.username} </h2>
            </div>
        }/>
    }

}