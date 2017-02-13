import React       from 'react';
import { render }  from 'react-dom';
import { browserHistory as history, match, Router } from 'react-router';
import routes from '../routes';

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById('react-view'))
})