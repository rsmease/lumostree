class TreeNode < ApplicationRecord
    validates :body, :parent_count, presence: true

    has_many :children,
        primary_key: 'id',
        foreign_key: 'parent_id',
        class_name: 'TreeNode'
    
    belongs_to :parent,
        primary_key: 'id',
        foreign_key: 'parent_id',
        class_name: 'TreeNode',
        optional: true
end
