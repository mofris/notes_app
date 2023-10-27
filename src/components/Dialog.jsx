import React from "react";
import Modal from 'react-modal';
import AddNote from './AddNote';

const Dialog = ({ modalIsOpen, closeModal, addNewNote }) => {
    return (
        <Modal id="#modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Tambah Catatan"
            closeTimeoutMS={200}
        >
            <AddNote addNewNote={addNewNote} closeModal={closeModal} />
        </Modal>
    );
};

export default Dialog;