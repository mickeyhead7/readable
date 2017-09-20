import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import './styles.css';

/**
 * @description Add/edit post form
 */
class PostForm extends Component {
    static propTypes = {
        body: propTypes.string,
        categories: propTypes.array.isRequired,
        category: propTypes.string,
        id: propTypes.string,
        onSubmit: propTypes.func.isRequired,
        title: propTypes.string,
    };

    state = {
        body: '',
        category: '',
        title: '',
    };

    /**
     * @description Updates the form state when the component receives new props
     * @param nextProps Received props
     */
    componentWillReceiveProps (nextProps) {
        const { body = '', category = '', id = '', title = '' } = nextProps;

        this.setState({
            body,
            category,
            id,
            title,
        });
    }

    /**
     * @description Handles an input change event
     * @param event Input event
     */
    handleInputChange = (event)  => {
        const name = event.target.getAttribute('name');

        this.setState({
            [name]: event.target.value,
        });
    };

    /**
     * @description Handles the form submission event
     * @param event Submission event
     */
    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);
    };

    /**
     * @description Renders the post form
     * @returns {XML}
     */
    render () {
        const { categories, id } = this.props;
        const { body, category, title } = this.state;

        return (
            <div className="post-form">
                <section className="post-form-backlink">
                    <Link to="/">
                        <FaArrowLeft />
                        <span>I'm done editing</span>
                    </Link>
                </section>
                <div className="post-form-body">
                    <header>
                        <h1>{id ? 'Edit post' : 'Add new post'}</h1>
                    </header>
                    <form className="post-form-content" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <label htmlFor="category">Give your post a title</label>
                            <input type="text" name="title" onChange={this.handleInputChange} placeholder="Title" value={title} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="body">What's on your mind?</label>
                            <textarea name="body" onChange={this.handleInputChange} placeholder="Start writing..." value={body} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="category">Choose a category</label>
                            <select name="category" onChange={this.handleInputChange} value={category}>
                                <option value="">Select a category...</option>
                                {categories.map(category => (
                                    <option key={category.path} value={category.path}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <button className="button">{id ? 'Update post' : 'Add post'}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default PostForm;