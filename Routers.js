import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Form from './components/form';
import history from './history';
import Main from './App';


// import PostList from './components/postList';
//FUNCTIONAL COMPONENT
const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/submit" exact component={Form} />
                <Route path="/home" exact component={Main} />

            </Switch>
        </Router>
    )
}
export default (Routes);
