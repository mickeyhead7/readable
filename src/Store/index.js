// import thunk from 'redux-thunk';
import reducer from '../Reducers';
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    // composeEnhancers(
    //     applyMiddleware(thunk)
    // )
);

export default store;
