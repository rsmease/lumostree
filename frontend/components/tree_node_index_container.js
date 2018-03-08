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

const mapStateToProps = (state, ownProps) => ({
    treeNodes: state.treeNodes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllTreeNodes: () => dispatch(requestAllTreeNodes),
    requestToCreateTreeNode: (treeNode) => dispatch(requestUpdateToTreeNode(treeNode)),
    requestUpdateToTreeNode: (treeNode) => dispatch(requestUpdateToTreeNode(treeNode))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreeNodeIndex);