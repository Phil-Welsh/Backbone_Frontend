import React, { useEffect, useState } from "react";
import CommentModel from "../models/comment";
import { useNavigate, useParams } from "react-router-dom";
import './NewComment.css'

function NewComment(props) {
    const params = useParams()

    const [body, setBody] = useState("");
    const [user, setUser] = useState(props.user);
    const [place, setPlace] = useState(params.id);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        CommentModel.create({ body, user, place }).then(
            (data) => {
                navigate(`/places/${params.id}`);
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

export default NewComment;
