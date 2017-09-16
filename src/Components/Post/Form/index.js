import React  from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import './styles.css';

const PostForm = props => {
    const { body, categories, category, id, onSubmit, title } = props;

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
                <form className="post-form-content" onSubmit={onSubmit}>
                    <div className="form-row">
                        <input type="text" id="title" placeholder="Title" defaultValue={title} />
                    </div>
                    <div className="form-row">
                        <textarea id="body" placeholder="Start writing..." defaultValue={body} />
                    </div>
                    <div className="form-row">
                        <select id="category" defaultValue={category}>
                            {categories.map(category => (
                                <option key={category.path} value={category.path}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-row">
                        <button>{id ? 'Update post' : 'Add post'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

PostForm.propTypes = {
    body: propTypes.string,
    categories: propTypes.array.isRequired,
    category: propTypes.string,
    id: propTypes.string,
    onSubmit: propTypes.func.isRequired,
    title: propTypes.string,
};

export default PostForm;