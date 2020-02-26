
import React from 'react'
import List from './List'

export default class Recette extends React.Component {

    state = {
        preview: !!this.props.preview,
        title: 'title',
        description: 'description',
        steps: ['step 1','step 2']
    }

    render(){
        return (
            <div className={`recette ${this.state.preview ? 'preview' : ''}`}>
                <div>
                    <h3> {this.state.title} </h3>
                    <p> {this.state.description} </p>
                </div>
                <div> {this.state.steps.length} steps </div>
                {this.state.preview ? '' : <List array={this.state.steps}/>}
            </div>
        )
    }

}
