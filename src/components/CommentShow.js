import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentModel from "../models/comment";
import Button from "../components/Button"
import './CommentShow.css'

const CommentShow = () => {
    const [comment, setComment] = useState([])
    const [user, setUser] = useState({})
    const params = useParams()

    useEffect(
        function () {
            fetchComment();
            fetchUser();
        },
        []

    );

    function fetchComment() {
        CommentModel.show(params.id).then((data) => {
            setComment(data.comment);
        });
    }

    function fetchUser() {
        fetch("http://localhost:4000/api/v1/profile", {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
            .catch(err => alert(err))
    }

    return (
        <div className="comment-show">
            {comment.body}
        </div>
    );
}

export default CommentShow;
