
import React from 'react'
import Page from './Page'
import List from '../components/List'

export default class Recettes extends React.Component {

    state = {
        recettes: []
    }

    render() {
        return <Page content={
            <List array={this.state.recettes}/>
        }/>
    }

}