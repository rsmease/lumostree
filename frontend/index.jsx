//utils
import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store';

import Provider from './components/provider';


document.addEventListener('DOMContentLoaded', () => {

    const store = createStore();
    window.store = store;
    //render components
    const root = document.getElementById('root');
    ReactDOM.render(<Provider store={store} />, root);

});