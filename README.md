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

## Routes and Controllers

- Routes were built under the API namespace so that frontend routes can be handled by React router
- Rails routes are passed to JBuilder for simple reception by Redux action creators
- Requests are filtered using strong params to prevent malicious injection

## React and Redux

- Bridge to React created via special ReactBridge controller with static 'root' container
- Redux implementation features smart components, thunk pattern for REST interaction with action creators
- Lodash merge() used to avoid mutations of state

## Still Missing

- No styling, no interaction, no way to use create/edit API methods
- No visual layout to reflect parent-child relationships

## Labor Distrubtion

### First Hour
- 20 minutes: setting Rails with preferred gems, database, git, webpack and npm
- 30 minutes: settng up migrations, models, routes and controllers
- 10 minutes: testing bridge to React frontend

### Second Hour
- 30 minutes: creation of actions, rest api calls, store, reducers
- 20 minutes: TreeNodeIndex and container components
- 10 minutes: deployment to Heroku







