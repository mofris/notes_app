import React from "react";
import ActionButton from "./ActionButtons";

import { showFormattedDate } from "../utils/index";

const NoteItem = ({ data, isArchived, onDelete }) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{data.title}</h3>
                <p className="note-item__date">{showFormattedDate(data.createdAt)}</p>
                <p className="note-item__body">{data.body}</p>
            </div>
            <ActionButton action={data} isArchived={isArchived} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;