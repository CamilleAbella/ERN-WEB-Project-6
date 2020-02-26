import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    render(){
        return (
            <header className="header">
                <Link className="logo" to="/home">
                    <img src="/logo.png" alt="logo" height="50"/>
                    <h1> Cook Note </h1>
                </Link>
                <div className="space">

                </div>
                <div className="menu">

                </div>
            </header>
        )
    }

}
