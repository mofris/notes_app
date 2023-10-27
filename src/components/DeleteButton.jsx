import React from "react";

const DeleteButton = ({ action, onDelete }) => {
    const onDeleteClick = () => onDelete(action.id);

    return (
        <button className="note-item__delete-button" onClick={onDeleteClick}>Delete</button>
    )
}

export default DeleteButton;
