import React from 'react';
import { useNavigate } from 'react-router-dom'

const EditDeleteButton = () => {

    const navigate = useNavigate()

    const editButton = () => {
        navigate("./edit")
    }

    return (
        <div className="edit-delete-button">
            <button onClick={editButton}>
                Edit
            </button>
        </div>
    );

}

export default EditDeleteButton;
