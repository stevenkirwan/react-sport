import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import NavBar from './components/NavBar';
import App from './components/App';
import League from './components/League';
import Team from './components/Team';

ReactDOM.render(
<BrowserRouter>
    <div>
        <NavBar />
        <Switch>
            <Route path="/team/:id" component={Team} />
            <Route path="/league/:id" component={League} />
            <Route path="/" component={App} />
        </Switch>
    </div>
</BrowserRouter>, document.getElementById('root'));
