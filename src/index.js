import React from 'react';
import ReactDOM from 'react-dom';
import './common/styles/_title.scss';
import './common/styles/_blockquote.scss';
import './_index.scss';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
