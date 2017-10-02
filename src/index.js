import React from 'react';
import ReactDOM from 'react-dom';
import {todo} from './main';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('colors'));
registerServiceWorker();