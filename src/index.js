import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // COMP 42D BROWSER ROUTER (IN PLACE OF HASHROUTER)
    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
