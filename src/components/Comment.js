import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CommentModel from "../models/comment";

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
                {comment.body}
            </Link>
        ));
    }

    return (
        <div>
            <h1>Comments</h1>
            {comments.length ? generateList(comments) : "Loading..."}
        </div>
    );
}

export default CommentList;
