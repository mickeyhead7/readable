import { combineReducers } from 'redux';
import categories from './categories';
import comments from './comments';
import messages from './messages';
import posts from './posts';
import sort from './sort';

/**
 * @description Combines all of the imported reducers
 */
export default combineReducers({
    categories,
    comments,
    messages,
    posts,
    sort,
});
