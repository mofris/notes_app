import React from "react";
import NotesList from "../components/NotesList";

const Content = ({ notes, isArchived, onDelete }) => {
    return (
        <div className="note-app__body">
            <h2 className="note-body__heading">Welcome to your personal notes!</h2>
            <h2>Active Notes</h2>
            <NotesList notesList={notes.filter(note => note.archived === false)} isArchived={isArchived} onDelete={onDelete} />
            <h2>Archive</h2>
            <NotesList notesList={notes.filter(note => note.archived === true)} isArchived={isArchived} onDelete={onDelete} />
        </div>
    )
}

export default Content;