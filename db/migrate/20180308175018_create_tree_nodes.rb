class CreateTreeNodes < ActiveRecord::Migration[5.1]
  def change
    create_table :tree_nodes do |t|
      t.string :body, null: false
      t.integer :parent_id
      t.timestamps
    end
    add_index :tree_nodes, :body
    add_index :tree_nodes, :parent_id
  end
end
