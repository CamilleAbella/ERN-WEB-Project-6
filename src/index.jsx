
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.css'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Recettes from './pages/Recettes'
import NotFound from './pages/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/recettes" component={Recettes}/>
        <Route path="/profile/:pseudo" component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>,document.getElementById('root'))
