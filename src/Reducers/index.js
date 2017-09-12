import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import sort from './sort';

/**
 * @description Combines all of the imported reducers
 */
export default combineReducers({
    categories,
    posts,
    sort,
});
