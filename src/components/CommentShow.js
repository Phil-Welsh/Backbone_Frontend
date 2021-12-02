import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentModel from "../models/comment";
import EditDeleteButton from "./EditDeleteButton"
import './CommentShow.css'

const CommentShow = () => {
    const [comment, setComment] = useState([])
    const [user, setUser] = useState({})
    const [place, setPlace] = useState([])
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
            setComment(data.comment.body)
            setPlace(data.comment.place.name);
        });
    }

    function fetchUser() {
        fetch("https://backbone-welsh.herokuapp.com/api/v1/profile", {
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
        <div>
            <h1>{place}</h1>
            <div className="comment-show">
                <a>
                    {comment}
                </a>
            </div>
            <div>
                {user ? < EditDeleteButton /> : ""}
            </div>
        </div>
    );
}

export default CommentShow;
