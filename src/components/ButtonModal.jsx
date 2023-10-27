import React from "react";

const ButtonModal = ({ openModal }) => {
    return (
        <button className="note-body__add-note-button" onClick={openModal}>
            Add new note
        </button>
    );
};

export default ButtonModal;