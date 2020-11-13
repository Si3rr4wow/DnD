import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from './relay-environment'

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App/>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
