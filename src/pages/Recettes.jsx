
import React from 'react'
import axios from 'axios'
import Page from './Page'
import Recette from '../components/Recette'
import List from '../components/List'
import config from '../config.json'
import { Link } from 'react-router-dom'

export default class Recettes extends React.Component {

    state = {
        recettes: []
    }

    fetchRecettes(){
        axios.get( config.api + 'recettes', {
            headers: { Authorization: 'Bearer ' + this.props.token },
        })
            .then( res => {
                if(res.status === 200)
                this.setState({ recettes: res.data })
            })
            .catch(console.error)
    }

    componentDidMount(){
        this.fetchRecettes()
    }

    render() {
        return <Page content={
            <div>
                <Recette token={this.props.token} edit={true}/>
                <List array={this.state.recettes.map( recette => {
                    return <Recette recette={recette} token={this.props.token} preview={true} edit={false}/>
                })}/>
            </div>
        }/>
    }

}