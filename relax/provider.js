import { Component, Children } from 'react';

export default class Provider extends Component {
  getChildContext() {
    return {
      store: this.store
    }
  }
  
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
    console.log('provider', this.store);
  }

  render() {
    return Children.only(this.props.children)
  }
}
