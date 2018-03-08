@tree_nodes.each do |tree_node|
    json.set! tree_node.id do
        json.extract! tree_node, :id, :body, :parent_id, :parent_count
    end
end