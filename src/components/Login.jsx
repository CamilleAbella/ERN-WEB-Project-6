import React from 'react'

export default class Login extends React.Component {

    state = {
        pseudo: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        if(event) event.preventDefault()
        this.props.connexion({
            pseudo: this.state.pseudo,
            password: this.state.password
        })
    }

    handleKeyDown = event => {
        this.handleClick()
    }

    render(){
        return (
            <div className="login center">
                <form className="form">
                    <h3> Veuillez vous connecter </h3>
                    <input type="text" name="pseudo" placeholder="Pseudo"
                        value={this.state.pseudo}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
                    />
                    <input type="password" name="password" placeholder="Password"
                        value={this.state.password} 
                        onKeyDown={this.handleKeyDown} 
                        onChange={this.handleChange}
                    />
                    <input type="submit" className="button" value="Login"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        )
    }
  }