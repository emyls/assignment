import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Login from './app/containers/Login';
import Dashboard from './app/containers/Dashboard';


class App extends Component {
  render() {
      const isLogged = localStorage.getItem('logged');
      const token = localStorage.getItem('token');
      const type = localStorage.getItem('type');
    return (
        <HashRouter>
                {
                    isLogged === 'ok' && token != null
                    ?

                        <div>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/Dashboard" component={Dashboard} />
                        </div>

                    :
                        <div>
                            <Route exact path="/" component={Login}/>
                            <Route  path="/Login" component={Login}/>
                        </div>
                }
        </HashRouter>
    );
  }
}

export default App;
