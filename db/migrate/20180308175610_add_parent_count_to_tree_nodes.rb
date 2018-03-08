class AddParentCountToTreeNodes < ActiveRecord::Migration[5.1]
  def change
    add_column :tree_nodes, :parent_count, :integer, null: false
  end
end
