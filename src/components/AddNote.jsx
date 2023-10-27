import React, { useState } from "react";
import Form from './Form';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AddNote = ({ addNewNote }) => {
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
                text: 'Tulisan tidak boleh lebih dari 50 karakter!'
            })
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log((formData.noteDesc.length <= 50))
        if (formData.title === '' || formData.noteDesc === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Mohon data diisi semua ya!'
            })
        } else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.noteDesc,
                archived: false,
                createdAt: new Date(),
            }
            const result = addNewNote(newData);
            if (!result.error) {
                toast.success('Catatan berhasil ditambahkan');
                setFormData({
                    ...formData,
                    title: '',
                    noteDesc: '',
                    noteDescLength: 0
                })
            } else {
                toast.error('Gagal Menambahkan Catatan, Silahkan Mencoba Kembali');
            }
        }
    }

    return (
        <div className="note-input">
            <h2>Add Note</h2>
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