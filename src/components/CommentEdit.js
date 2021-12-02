import React, { useEffect, useState } from "react";
import CommentModel from "../models/comment";
import { useNavigate, useParams } from "react-router-dom";

function CommentEdit(props) {
    const params = useParams()

    const [body, setBody] = useState([]);
    const [user, setUser] = useState(props.user);
    const [place, setPlace] = useState([]);

    const navigate = useNavigate();

    useEffect(
        function () {
            fetchComment();
            fetchUser();
        },
        []

    );

    function fetchComment() {
        CommentModel.show(params.id).then((data) => {
            setBody(data.comment.body)
            setPlace(data.comment.place._id);
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

    function handleSubmit(event) {
        event.preventDefault();

        CommentModel.update({ body, user, place }, params.id).then(
            (data) => {
                navigate(`/comments/${params.id}`);
            }
        );
    }

    return (
        <div className="new-comment-card">
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input
                        type='text'
                        name='body'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </div>
                <input type='submit' value='Save!' />
            </form>
        </div>
    );
}

export default CommentEdit;
