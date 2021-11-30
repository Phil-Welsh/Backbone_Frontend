import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CommentModel from "../models/comment";
import './Comment.css'

function CommentList(props) {
    const [comments, setComments] = useState([]);

    useEffect(
        function() {
            fetchComments();
        },
        []
    );

    function fetchComments() {
            CommentModel.all(props).then((data) => {
                setComments(data.comments);
            });
        }

    function generateList(comments) {
        return comments.map((comment, index) => (
            <Link to={`/comments/${comment._id}`} key={index}>
                <div className="comment">
                    <a>
                        {comment.body}
                        <br/>
                    </a>
                    <a>
                        Comment by: {comment.user.username}
                    </a>
                </div>
            </Link>
        ));
    }

    return (
        <div>
            <h3>Comments</h3>
            {comments.length ? generateList(comments) : "Loading..."}
        </div>
    );
}

export default CommentList;
