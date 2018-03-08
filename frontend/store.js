import {
    createStore,
    applyMiddleware
} from 'redux';

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