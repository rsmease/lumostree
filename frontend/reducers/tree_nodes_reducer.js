import {
    RECEIVE_ALL_TREE_NODES,
    RECEIVE_TREE_NODE
} from '../actions/tree_nodes_actions';

import _ from 'lodash';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_ALL_TREE_NODES:
            return _.merge({}, state, action.treeNodes)
        case RECEIVE_TREE_NODE:
            return _.merge({}, state, action.treeNode)
        default:
            return state;
    }
}