import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Login from './panel/Login'
import Panel from './panel/Panel.js'
import Card1 from './panel/Card1'
import Bosh from './panel/Bosh'
import Apteka from './panel/Apteka'
export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            <Route exact path="/">
            <Panel/>
          </Route>
          <Route exact path="/admin">
            <Login/>
          </Route>
          
             </BrowserRouter> 
        
      </div>
    )
  }
}
