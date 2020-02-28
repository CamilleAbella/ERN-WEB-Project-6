
import React from 'react'
import axios from 'axios'
import Page from './Page'
import List from '../components/List'
import config from '../config.json'

export default class Recette extends React.Component {

    state = {
        edit: !!this.props.edit,
        preview: !!this.props.preview,
        title: this.props.recette ? this.props.recette.title || '' : '',
        description: this.props.recette ? this.props.recette.description || '' : '',
        cookingtime: this.props.recette ? this.props.recette.cookingtime || 0 : 0,
        bakingtime: this.props.recette ? this.props.recette.bakingtime || 0 : 0,
        ingredients: this.props.recette ? this.props.recette.ingredients || [] : [],
        steps: this.props.recette ? this.props.recette.steps || [''] : ['']
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleEdit(){
        this.setState({ edit: true })
    }

    handleIngredientChange = event => {
        if(event.target.value.includes(',')){
            const [ , ingredient ] = /^([^,]+)(?:,|\n)/.exec(event.target.value)
            this.setState({ ingredients: [ ...this.state.ingredients, ingredient ] })
            event.target.value = ''
        }
    }

    handleDeleteIngredient( ingredient ){
        this.setState({ ingredients: this.state.ingredients.filter( ing => ing !== ingredient ) })
    }

    handleStepChange = event => {
        const index = this
        const steps = this.state.steps.slice()
        steps[index] = event.target.value
        this.setState({ steps })
    }

    addStep(){
        this.setState({ steps: [ ...this.state.steps, '' ] })
    }

    handleSubmit(){
        axios.post( config.api + 'recette', {
            json: JSON.stringify({
                token: this.props.token,
                title: this.state.title,
                description: this.state.description,
                cookingtime: this.state.cookingtime,
                bakingtime: this.state.bakingtime,
                ingredients: this.state.ingredients,
                steps: this.state.steps
            })
        })
            .then( res => {
                if(res.status === 200)
                this.setState({ edit: false })
            })
            .catch(console.error)
    }

    render(){
        if(this.state.edit)
        return (
            <Page content={
                <form className="form">
                    <h3> Edition de recette </h3>
                    <input type="text" name="title" placeholder="Titre" required
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <textarea name="description" placeholder="Description" maxLength="2048" required
                        value={this.state.description}
                        onChange={this.handleChange} 
                    ></textarea>
                    <input type="number" name="cookingtime" min="0" step="5" placeholder="Tps de prépa. (min)" required
                        value={this.state.cookingtime}
                        onChange={this.handleChange}
                    />
                    <input type="number" name="bakingtime" min="0" step="5" placeholder="Tps de cuis. (min)" required
                        value={this.state.bakingtime}
                        onChange={this.handleChange}
                    />
                    <div>
                        {this.state.ingredients.map( ing => (
                            <span className="badge"> ing 
                                <button type="button" onClick={() => this.handleDeleteIngredient(ing)}> x </button>
                            </span>
                        )).join(' ')}
                    </div>
                    <textarea placeholder="Ingrédients"
                        onChange={this.handleIngredientChange} 
                    ></textarea>
                    <ol>
                        {this.state.steps.map( (step, index) => (
                            <textarea maxLength="2048"
                                value={step}
                                onChange={this.handleStepChange.bind(index)}
                                placeholder="Do this"
                            ></textarea>
                        ))}
                    </ol>
                    <button type="button" onClick={this.addStep}> Ajouter une étape </button>
                    <input type="submit" className="button" value="Enregistrer"
                        onClick={this.handleSubmit} 
                    />
                </form>
            }/>
        )
        return (
            <div className="recette">
                <button type="button" onClick={this.handleEdit}> Editer </button>
                <div>
                    <h3> {this.state.title} </h3>
                    <p> {this.state.description} </p>
                </div>
                <div> {this.state.steps.length} étapes de préparation </div>
                {this.state.preview ? '' : <List array={this.state.steps}/>}
            </div>
        )
    }

}