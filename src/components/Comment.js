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
                    <small>
                        Comment by: {comment.user.username}
                    </small>
                </div>
            </Link>
        ));
    }

    return (
        <>
        {comments.length ? (
                <div>
                    <h2>Recent comments</h2>
                    {generateList(comments)}
                </div>
                ) :

                (
                    <div>

                    </div>
                )
            }
        </>
    )
}

export default CommentList;
