import {
    fetchAllTreeNodes,
    postTreeNode,
    patchTreeNode
} from '../rest-api/tree_nodes_api';

export const RECEIVE_TREE_NODE = 'RECEIVE_TREE_NODE';
export const RECEIVE_ALL_TREE_NODES = 'RECEIVE_ALL_TREE_NODES';

const receiveTreeNode = (treeNode) => ({
    type: RECEIVE_TREE_NODE,
    treeNode
});

const receiveAllTreeNodes = (treeNodes) => ({
    type: RECEIVE_ALL_TREE_NODES,
    treeNodes
});

export const requestAllTreeNodes = () => (dispatch) => fetchAllTreeNodes()
    .then(fetchedTreeNodes => dispatch(receiveAllTreeNodes(fetchedTreeNodes)));

export const createNewTreeNode = (treeNode) => (dispatch) =>
    postTreeNode(treeNode).then(createdTreeNode =>
        dispatch(receitveTreeNode(treeNode)));

export const requestUpdateToTreeNode = (treeNode) => (dispatch) =>
    updateTreeNode(treeNode).then(updatedTreeNode =>
        dispatch(receiveTreNode(updatedTreeNode)));