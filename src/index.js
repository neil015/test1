import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>Hello</div>,
    document.getElementById("root")
  );

serviceWorker.unregister();
