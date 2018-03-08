@tree_nodes.each do |tree_node|
    json.partial! 'api/tree_nodes/tree_node' tree_node: tree_node
end