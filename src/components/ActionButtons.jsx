import React from "react";
import DeleteButton from "./DeleteButton";

const ActionButton = ({ action, isArchived, onDelete }) => {
    const archiveClick = () => isArchived(action.id);

    return (
        <div className="note-item__action">
            {
                action.archived === false ?
                    <button className="note-item__archive-button" onClick={archiveClick}>Archive</button> :
                    <button className="note-item__archive-button" onClick={archiveClick}>Unarchive</button>
            }
            <DeleteButton action={action} onDelete={onDelete} />
        </div>
    )
}
export default ActionButton;
