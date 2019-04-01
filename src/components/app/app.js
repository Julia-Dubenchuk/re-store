import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';

import './app.css';
import { withBookstoreService } from '../hoc';

class App extends Component {

    state = {

    };

    render() {
        console.log(this.props.bookstoreService.getBooks());
        return (
            <div className="container col-lg-10">
            <Switch>
                <Route path="/" component={HomePage}  exact />
                <Route path="/card" component={CardPage} />
            </Switch>
            </div>
        );
    }

}

export default withBookstoreService()(App);