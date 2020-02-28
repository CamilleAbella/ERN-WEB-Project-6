
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.css'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>,document.getElementById('root'))
