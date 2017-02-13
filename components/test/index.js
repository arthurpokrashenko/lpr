import React from 'react';

import Test from './test/test';
import ProductCard from './ProductCard/ProductCard';
import ProductsContainer from '../containers/ProductsContainer';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>ARTUR</h1>
        <Test name="Arthur"/>    
        <hr />
        {this.props.children}
        <ProductsContainer/>
      </div>
    );
  }
}

