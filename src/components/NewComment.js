import React, { useState } from "react";
import CommentModel from "../models/comment";
import { useParams } from "react-router-dom";
import './NewComment.css'

function NewComment(props) {
    const params = useParams()

    const [body, setBody] = useState("");
    const [user, setUser] = useState(props.user);
    const [place, setPlace] = useState(params.id);

    function handleSubmit(event) {
        event.preventDefault();

        CommentModel.create({ body, user, place }).then(
            (data) => {
                window.location.reload();
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
