import React from 'react';
import { useNavigate } from 'react-router-dom'
import CommentModel from '../models/comment'

const EditDeleteButton = (props) => {
    const navigate = useNavigate();

    const editButton = () => {
        navigate("./edit")
    }

    const deleteButton = () => {
        CommentModel.delete(props.commentId).then((data) => {
        navigate(`/places/${props.placeId}`)
        }
    )
}

    return (
        <div className="edit-delete-button">
            <button onClick={editButton}>
                Edit
            </button>
            <button onClick={deleteButton}>
                Delete
            </button>
        </div>
    );

}

export default EditDeleteButton;
