import uuid from 'uuid/v4';
import domPurify from 'dompurify';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Date from '../../Utils/Date';
import React, { Component } from 'react';
import PostForm from '../../Components/Post/Form';
import { updateMessage } from '../../Actions/messages';
import { fetchCategories } from '../../Actions/categories';
import { addPost, fetchPost, setCurrentPost, updatePost } from '../../Actions/posts';

/**
 * @description Post edit view
 */
class Edit extends Component {
    static propTypes = {
        addPost: propTypes.func.isRequired,
        categories: propTypes.array,
        clearPost: propTypes.func.isRequired,
        fetchCategories: propTypes.func.isRequired,
        fetchPost: propTypes.func.isRequired,
        id: propTypes.string,
        post: propTypes.object,
        updateMessage: propTypes.func.isRequired,
        updatePost: propTypes.func.isRequired,
    };

    /**
     * @description Load the post, if selected, on mount
     */
    componentDidMount () {
        const { clearPost, fetchCategories, fetchPost, match } = this.props;
        const { post_id } = match.params;

        fetchCategories();

        if (post_id) {
            fetchPost(post_id);
        } else {
            clearPost();
        }
    }

    /**
     * @description Validate given post data
     * @param data Post data
     * @returns {boolean}
     */
    validatePost = data => {
        return !!(data.body && data.category && data.title);
    };

    /**
     * @description Post submission
     * @param data Post data
     */
    submitPost = data => {
        const { addPost, post, updateMessage, updatePost } = this.props;
        const messageId = uuid();

        if (!this.validatePost(data)) {
            updateMessage({
                body: 'Please enter all the post details',
                id: uuid(),
                level: 'error',
            });

            return;
        }

        const postData = {
            author: 'thingthree',
            body: domPurify.sanitize(data.body),
            category: domPurify.sanitize(data.category),
            id: data.id ? data.id : uuid(),
            timestamp: Date.getCurrentUnixTimestamp(),
            title: domPurify.sanitize(data.title),
        };

        // Choose between adding a new post and updating an existing one
        const result = (post && post.id) ? updatePost(postData) : addPost(postData);

        result.then(() => {
            updateMessage({
                body: 'Post successfully saved. Feel free to keep editing',
                id: messageId,
                level: 'success',
            });
        }).catch(() => {
            console.log('error');
            updateMessage({
                body: 'There was an error saving your post',
                id: messageId,
                level: 'error',
            });
        });
    };

    /**
     * @description Render the view
     * @returns {XML}
     */
    render () {
        const { categories, post } = this.props;

        return (
            <div>
                <main>
                    <PostForm
                        {...post}
                        categories={categories}
                        onSubmit={this.submitPost}
                    />
                </main>
            </div>
        );
    }
}

/**
 * @description Maps store to local props
 * @param categories Categories store
 * @param posts Posts store
 * @returns {{post: *}}
 */
const mapStateToProps = ({ categories, posts }) => {
    return {
        categories: categories.categories || [],
        fetchCategories: propTypes.func.isRequired,
        post: posts.current,
    };
};

/**
 * @description Maps dispatch to local props
 * @param dispatch Store dispatch method
 */
const mapDispatchToProps = dispatch => {
    return {
        /**
         * @description Adds a post to the store
         * @param post
         */
        addPost: post => {
            return dispatch(addPost(post));
        },
        /**
         * @description Clears the current post being edited in the store
         */
        clearPost: () => {
            return dispatch(setCurrentPost(null));
        },
        /**
         * @description Fetch the categories
         */
        fetchCategories: () => {
            return dispatch(fetchCategories());
        },
        /**
         * Fetches a given post and adds it to the store
         * @param id Post id
         */
        fetchPost: id => {
            return dispatch(fetchPost(id));
        },
        /**
         * @description Sets the app message
         * @param body Message body
         * @param level Message level
         * @returns {*}
         */
        updateMessage: ({ body, level, id, timeout }) => {
            return dispatch(updateMessage({ body, level, id, timeout }));
        },
        /**
         * @description Updates a selected post
         * @param post Post object
         * @returns {Promise.<TResult>}
         */
        updatePost: post => {
            return dispatch(updatePost(post));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);