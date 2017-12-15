import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/dumb/home';
import Builder from './components/smart/builder';
import Editor from './components/smart/editor';
import Search from './components/smart/search';

export default (
    <div>
        {/* COMP 42G SWITCH */}
        <Switch>
            {/* COMP 42F ROUTE */}
            {/* COMP 42H COMPONENT */}
            <Route exact path='/' component={Home}/>
            <Route path='/bio-builder' component={Builder}/>
            <Route path='/bio-editor' component={Editor}/>
            <Route path='/search' component={Search}/>
        </Switch>
    </div>
)