import React from 'react';
import { Provider } from 'react-redux';
import TreeNodeIndexContainer from './tree_node_index_container';

export default ({ store }) => (
    <Provider store={store}>
        <TreeNodeIndexContainer />
    </Provider>
);