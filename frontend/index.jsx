//utils
import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store';

import Provider from './components/provider';

import {
    fetchAllTreeNodes
} from './rest-api/tree_nodes_api'


document.addEventListener('DOMContentLoaded', () => {

    const store = createStore();
    window.store = store;
    window.fetchAllTreeNodes = fetchAllTreeNodes;
    //render components
    const root = document.getElementById('root');
    ReactDOM.render(<Provider store={store} />, root);

});