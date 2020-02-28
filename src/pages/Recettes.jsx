
import React from 'react'
import axios from 'axios'
import Page from './Page'
import Recette from './Recette'
import List from '../components/List'
import config from '../config.json'

export default class Recettes extends React.Component {

    state = {
        recettes: []
    }

    fetchRecettes(){
        axios.get( config.api + 'recettes', {
            params: { token: this.props.token }
        })
            .then( res => {
                if(res.status === 200)
                this.setState({ recettes: res.data.recettes })
            })
            .catch(console.error)
    }

    componentDidMount(){
        this.fetchRecettes()
    }

    render() {
        return <Page content={
            <List array={this.state.recettes.map( recette => {
                return <Recette recette={recette} token={this.props.token} preview={true} edit={false}/>
            })}/>
        }/>
    }

}