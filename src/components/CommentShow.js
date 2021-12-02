import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentModel from "../models/comment";
import EditDeleteButton from "./EditDeleteButton"
import './CommentShow.css'

const CommentShow = () => {
    const [comment, setComment] = useState([])
    const [user, setUser] = useState({})
    const [place, setPlace] = useState([])
    const [commentUser, setCommentUser] = useState([])
    const [commentId, setCommentId] = useState([])
    const [placeId, setPlaceId] = useState([])
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
            setCommentUser(data.comment.user)
            setCommentId(data.comment._id)
            setPlaceId(data.comment.place._id)
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
                {user._id == commentUser ? < EditDeleteButton placeId={placeId} commentId={commentId}/> : ""}
            </div>
        </div>
    );
}

export default CommentShow;
