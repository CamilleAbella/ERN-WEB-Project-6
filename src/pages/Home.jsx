import React from 'react'
import qs from 'querystring'
import axios from 'axios'
import Login from '../components/Login'
import Recettes from './Recettes'
import Page from './Page'
import config from '../config.json'

export default class Home extends React.Component {

    state = {
        logged: false,
        token: null
    }

    handleConnexion = info => {
        axios.post( '/login', qs.stringify(info), {
            baseURL: config.api,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then( res => {
                if(res.status === 200)
                this.setState({
                    logged: true,
                    token: res.data.token
                })
            })
            .catch(console.error)
    }

    render(){
        if(this.state.logged){
            if(this.props.page)
            return <this.props.page token={this.state.token}/>
            return <Recettes token={this.state.token}/>
        }
        return <Page content={<Login connexion={this.handleConnexion}/>}/>
    }
}