import React from "react";

const ActionButton = ({ action, isArchived, onDelete }) => {
    const archiveClick = () => isArchived(action.id);
    const onDeleteClick = () => onDelete(action.id);

    return (
        <div className="note-item__action">
            {
                action.archived === false ?
                    <button className="note-item__archive-button" onClick={archiveClick}>Archive</button> :
                    <button className="note-item__archive-button" onClick={archiveClick}>Unarchive</button>
            }
            <button className="note-item__delete-button" onClick={onDeleteClick}>Delete</button>
        </div>
    )
}
export default ActionButton;
