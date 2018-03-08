export const fetchAllTreeNodes = () => (
    $.ajax({
        url: 'api/tree_nodes',
        method: 'GET'
    })
);

export const postTreeNode = (treeNode) => (
    $.ajax({
        url: 'api/tree_nodes',
        method: 'POST',
        data: {
            tree_node: treeNode
        }
    })
);

export const patchTreeNode = (treeNode) => (
    $.ajax({
        url: `api/projects/${treeNode.id}`,
        method: 'PATCH',
        data: {
            tree_node: treeNode
        }
    })
);