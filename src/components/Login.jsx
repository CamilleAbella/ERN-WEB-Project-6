import React from 'react'

export default class Login extends React.Component {

    state = {
        pseudo: '',
        password: ''
    }

    handleChange = event => {
        const value = event.target.value
        if(event.target.name === 'pseudo')
        this.setState({ pseudo: value })
        else this.setState({ password: value })
    }

    handleClick = event => {
        if(event) event.preventDefault()
        
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
                        onClick={this.handleClick} 
                    />
              </form>
          </div>
        )
    }
  }