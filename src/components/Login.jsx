import React from 'react'

export default class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        if(event) event.preventDefault()
        this.props.connexion({
            username: this.state.username,
            password: this.state.password
        })
    }

    render(){
        return (
            <div className="login center">
                <form className="form">
                    <h3> Veuillez vous connecter </h3>
                    <input type="text" name="username" placeholder="Pseudo"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input type="password" name="password" placeholder="Mot de passe"
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                    <input type="submit" className="button" value="Se connecter"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        )
    }
  }