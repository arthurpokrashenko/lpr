import React from 'react';
import { Route } from 'react-router';
import App from '../components';

import createStore from '../relax/createStore';
import productsTransformer from '../transformers/products';
import Provider from '../relax/provider';

const initialState = [{
    id: 1,
    title: 'Product 1',
    isFavorite: false
}];

const store = createStore(productsTransformer, initialState);

export default (
    <Provider store={store}>
        <Route name="app" component={App} path="/"/>
    </Provider>    
);