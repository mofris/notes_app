import React, { useState } from "react";
import Form from './Form';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AddNote = ({ addNewNote, closeModal }) => {
    const [formData, setFormData] = useState({
        title: '',
        noteDesc: '',
        noteDescLength: 0
    });

    const onTitleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onDescChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 50) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                noteDescLength: event.target.value.length
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (formData.title === '' || formData.noteBody === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Mohon data diisi semua ya!'
            })
        } else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.noteBody,
                archived: false,
                createdAt: new Date(),
            }
            const result = addNewNote(newData);
            if (!result.error) {
                toast.success('Catatan berhasil ditambahkan');
                setFormData({
                    ...formData,
                    title: '',
                    noteBody: '',
                    noteBodyLength: 0
                })
                closeModal();
            } else {
                toast.error('Gagal Menambahkan Catatan, Silahkan Mencoba Kembali');
            }
        }
    }

    return (
        <div className="note-input">
            <h2>New Note</h2>
            <Form
                formData={formData}
                onTitleChange={onTitleChange}
                onDescChange={onDescChange}
                onSubmitForm={onSubmitForm}
            />
        </div>
    )
}

export default AddNote;