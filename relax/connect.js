import { createElement } from 'react';

export default function connect(a, b) {
  return function (originalComponent) {
    class ConnectedComponent extends originalComponent {
      constructor(props, context) {
        super(props, context);
      }

      /* ... */
    }

    console.log(ConnectedComponent);
    return originalComponent; 
  }; 
} 