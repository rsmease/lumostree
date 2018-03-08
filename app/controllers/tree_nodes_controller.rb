class TreeNodesController < ApplicationController
    def index
        @tree_nodes = TreeNode.all
        render 'api/tree_nodes/index'
    end

    def create
        @tree_node = TreeNode.new(tree_node_params)

        # this is not especially efficient and needs to be improved
        parent = TreeNode.find(parent_id);
        @tree_node.parent_count = parent ? parent.parent_count + 1 : 0

        if @tree_node.save?
            render 'api/tree_nodes/show'
        else
            render json: @tree_node.errors.full_messages, status: 422
        end
    end

    def  update
        @tree_node = TreeNode.find(params[:id])
        if TreeNode.update(tree_node_params)
            render 'api/tree_nodes/show'
        else
            render json: @tree_node.errors.full_messages, status: 422
        end
    end

    # strong params method in use to prevent SQL injection
    # CSRF prevention provided by Rails default behavior in ActionController
    private 

    def tree_node_params
        params.require(:tree_node).permit(:body, :parent_id, :parent_count)
    end
end
