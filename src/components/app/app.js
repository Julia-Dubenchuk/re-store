import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CardPage } from '../pages';

import './app.css';
import { withBookstoreService } from '../hoc';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route path="/" component={HomePage}  exact />
                <Route path="/card" component={CardPage} />
            </Switch>
        </main>
    );
}

export default withBookstoreService()(App);