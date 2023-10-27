import React from "react";
import NoteItem from "./NotesItem";

const NotesList = ({ notesList, isArchived, onDelete }) => {
    return (
        <>
            {notesList.length !== 0 ?
                <div className="notes-list">
                    {
                        notesList.map(item => (
                            <NoteItem key={item.id} data={item} isArchived={isArchived} onDelete={onDelete} />
                        ))
                    }
                </div> :
                <p className="notes-list__empty-message">No notes here.</p>
            }
        </>
    )
}

export default NotesList;