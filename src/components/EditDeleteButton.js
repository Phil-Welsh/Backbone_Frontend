import React from 'react';
import { useNavigate } from 'react-router-dom'
import CommentModel from '../models/comment'
import './EditDeleteButton.css'

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
        <div>
            <button onClick={editButton} className="edit-button" >
                Edit
            </button>
            <button onClick={deleteButton} className="delete-button" >
                Delete
            </button>
        </div>
    );

}

export default EditDeleteButton;
