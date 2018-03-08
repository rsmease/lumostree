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

## Omitted Specs

- The specs asked for 'a nod toward something that might require careful thought to scale up to tons of concurrent users'
    - This reads like the Oracle of Delphi! — I am interpreting it as a desire for live, concurrent editing by multiple users working on the same tree at the same time
    - Websockets are bit much for a one-hour race to the finish line, so I am omitting those for later development
- The web interface specs request a 'loading' action
    - I will load all nodes by default; filtering etc. could be something that we build out later








