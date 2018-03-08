# README

## Tool Set

- Core: React, Redux and Rails with PostgreSQL
- Utils: Webpack, react-icons, Babel transpiler, lodash (see Redux reducers), $.ajax for REST calls

## Database Schema

- I really only need one model, I'm calling it TreeNode
    - :parent_id for easy self-join model
    - :body for node content, t.string instead of t.textarea to limit content length
    - :parent_count because I plan to color the components based on their parent count, reducing the alpha as you recurse deeper into the tree
- I didn't add a t.integer :color with the intention of making that randomized on the frontend; let's see if that works out!




