import {
    createStore,
    applyMiddleware
} from 'redux';

import rootReducer from './reducers/root_reducer';

const thunk = ({
    dispatch,
    getState
}) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    } else {
        return next(action);
    }
};

export default () => createStore(
    rootReducer, applyMiddleware(thunk)
);