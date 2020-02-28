
import React from 'react'
import axios from 'axios'
import Page from './Page'
import config from '../config.json'

export default class Profile extends React.Component {

    state = {
        user: null
    }

    fetchUser(){
        axios.get( config.api + 'profile', {
            params: { token: this.props.token }
        })
            .then( res => {
                if(res.status === 200)
                this.setState({ user: res.data })
            })
            .catch(console.error)
    }

    componentDidMount(){
        this.fetchUser()
    }

    render(){
        if(this.state.user)
        return <Page content={
            <div className="center">
                <h2> Profile de {this.state.user.pseudo} </h2>
            </div>
        }/>
    }

}