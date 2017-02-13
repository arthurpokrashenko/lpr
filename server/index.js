import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import routes from '../routes';

const app = express();

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const componentHTML = renderToString(<RouterContext {...renderProps} />);
      const HTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Isomorphic LPR</title>
            </head>
            <body>
              <div id="react-view">${componentHTML}</div>
              <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>    
      `
      res.status(200).send(HTML);
    } else {
      res.status(404).send('Not found');
    }
  });
});

module.exports = app;