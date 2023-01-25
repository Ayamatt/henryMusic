import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "dev-pn2czfl5wy1pdhmw.us.auth0.com"
const clientId = "OCltO6wdxzfQTuowJoHh7uZyGmMgSeed"

console.log(domain);
console.log(clientId);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>

      <App />

    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
