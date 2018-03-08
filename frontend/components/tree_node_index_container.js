import React from 'react';
import TreeNodeIndex from './TreeNodeIndex';

import {
    requestAllTreeNodes,
    requestUpdateToTreeNode,
    requestToCreateTreeNode
} from '../actions/tree_nodes_actions';

import {
    connect
} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let treeNodeKeys = Object.keys(state.treeNodes);
    let treeNodesArray = []
    treeNodeKeys.forEach(key => {
        treeNodesArray.push(state.treeNodes[key]);
        return;
    });
    return {
        treeNodes: treeNodesArray
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllTreeNodes: () => dispatch(requestAllTreeNodes()),
    requestToCreateTreeNode: (treeNode) => dispatch(requestUpdateToTreeNode(treeNode)),
    requestUpdateToTreeNode: (treeNode) => dispatch(requestUpdateToTreeNode(treeNode))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreeNodeIndex);