import uuid from 'uuid/v4';
import domPurify from 'dompurify';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import * as Date from '../../Utils/Date';
import React, { Component } from 'react';
import PostForm from '../../Components/Post/Form';
import { setEditPost } from '../../Actions/posts';
import { updateMessage } from '../../Actions/messages';
import { addCategories } from '../../Actions/categories';

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
    };

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

    validatePost = data => {
        const { updateMessage } = this.props;

        if (!(data.body && data.category && data.title)) {
            updateMessage({
                body: 'Please enter all the post details',
                id: uuid(),
                level: 'error',
            });

            return false;
        }

        return true;
    };

    submitPost = data => {
        const { addPost, updateMessage } = this.props;
        const messageId = uuid();

        if (!this.validatePost(data)) {
            return;
        }

        const postData = {
            author: 'thingthree',
            body: domPurify.sanitize(data.body),
            category: domPurify.sanitize(data.category),
            id: data.id ? data.id : uuid(),
            timestamp: Date.getUnixTimestamp(),
            title: domPurify.sanitize(data.title),
        };

        addPost(postData).then(() => {
            updateMessage({
                body: 'Post successfully saved. Feel free to keep editing',
                id: messageId,
                level: 'success',
            });
        }).catch(() => {
            updateMessage({
                body: 'There was an error saving your post',
                id: messageId,
                level: 'error',
            });
        });
    };

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
        post: posts.edit,
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
            return API.addPost(post).then(post => {
                dispatch(setEditPost(post));
            });
        },
        clearPost: () => {
            dispatch(setEditPost(null));
        },
        /**
         * @description Fetch the categories
         */
        fetchCategories: () => {
            return API.fetchCategories().then(categories => {
                dispatch(addCategories(categories));
            });
        },
        /**
         * Fetches a given post and adds it to the store
         * @param id Post id
         */
        fetchPost: id => {
            return API.fetchPost(id).then(post => {
                dispatch(setEditPost(post));
            });
        },
        updateMessage: (body, level) => {
            return dispatch(updateMessage(body, level));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);