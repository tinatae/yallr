import React from 'react';
import {connect} from 'react-redux';

const Review = ({ review, author }) => {
    const { starmaker, body } = review;
    return (
        <div className="reviews">
            <span id="rating">Rating: {starmaker}</span>
            <br/>
            <span id="comment">{body}</span>
            <br />
            <span id="username">{author.username}</span>
            <br />
        </div>
    )
};

const mSTP = ({entities: { users }}, { review }) => {
    return { 
        author: users[review.author_id]
    };
};

export default connect(mSTP)(Review);