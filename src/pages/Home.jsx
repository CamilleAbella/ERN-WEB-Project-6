import React from 'react'
import Login from '../components/Login'
import Recettes from './Recettes'
import Page from './Page'

export default class Home extends React.Component {

    state = {
        logged: false
    }

    render(){
        return this.state.logged ? <Recettes/> : <Page content={<Login/>}/>
    }
}