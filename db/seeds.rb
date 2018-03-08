# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TreeNode.destroy_all

tn0 = TreeNode.create!(body: '.root', parent_id: nil, parent_count: 0)
tn1 = TreeNode.create!(body: 'Aardvark', parent_id: tn0.id, parent_count: tn0.parent_count + 1);
tn2 = TreeNode.create!(body: 'Banana', parent_id: tn0.id, parent_count: tn0.parent_count + 1);
tn3 = TreeNode.create!(body: 'Crispy Creme', parent_id: tn0.id, parent_count: tn0.parent_count + 1);
tn4 = TreeNode.create!(body: 'Delaware', parent_id: tn0.id, parent_count: tn0.parent_count + 1);

tn1_1 = TreeNode.create!(body: 'Atlas', parent_id: tn1.id, parent_count: tn1.parent_count + 1);
tn1_2 = TreeNode.create!(body: 'Anacolouthon', parent_id: tn1.id, parent_count: tn1.parent_count + 1);
tn1_3 = TreeNode.create!(body: 'Anne Hathaway', parent_id: tn1.id, parent_count: tn1.parent_count + 1);