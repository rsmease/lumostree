import {
    fetchAllNodes,
    postTreeNode,
    patchTreeNode
} from '../rest-api/tree_nodes_api';

export const RECEIVE_TREE_NODE = 'RECEIVE_TREE_NODE';
export const RECEIVE_ALL_TREE_NODES = 'RECEIVE_ALL_TREE_NODES';

const receiveTreeNode = (treeNode) => ({
    type: RECEIVE_TREE_NODE,
    treeNode
});

const receiveAllTreeNode = (treeNodes) => ({
    type: RECEIVE_ALL_TREE_NODES,
    treeNodes
});