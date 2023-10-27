import React, { useState } from "react";
import NotesList from "../components/NotesList";
import ButtonModal from "../components/ButtonModal";
import Dialog from "../components/Dialog";
import AddNote from "../components/AddNote";

const Content = ({ notes, isArchived, onDelete, addNewNote }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="note-app__body">
            <AddNote />
            <h2 className="note-body__heading">Welcome to your personal notes!</h2>
            {/* <ButtonModal openModal={openModal} /> */}

            <h2>Active Notes</h2>
            <NotesList notesList={notes.filter(note => note.archived === false)} isArchived={isArchived} onDelete={onDelete} />
            <h2>Archive</h2>
            <NotesList notesList={notes.filter(note => note.archived === true)} isArchived={isArchived} onDelete={onDelete} />
            {/* <Dialog modalIsOpen={modalIsOpen} closeModal={closeModal} addNewNote={addNewNote} /> */}
        </div>
    )
}

export default Content;