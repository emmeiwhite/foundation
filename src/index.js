import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import rootReducer from './reducers/rootReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Store 
const store = createStore(rootReducer);


ReactDOM.render(
    // Provider makes the store available to all our Containers(Our Connected Components)
<Provider store={store}>
    <App />
</Provider>  , document.getElementById('root'));
registerServiceWorker();
