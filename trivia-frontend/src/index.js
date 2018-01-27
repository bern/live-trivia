import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
