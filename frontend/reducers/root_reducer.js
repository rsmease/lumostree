import {
    combineReducers
} from 'redux';

import treeNodesReducer from './tree_nodes_reducer';

export default combineReducers({
    treeNodes: treeNodesReducer
});