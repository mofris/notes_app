import React from 'react';
import Header from '../template/Header';
import Content from '../template/Content';
import Footer from '../template/Footer';

import { getInitialData } from '../utils/index';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNotes: getInitialData(),
            filteredNotes: getInitialData()
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.isArchiveHandler = this.isArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.addNewNoteHandler = this.addNewNoteHandler.bind(this);
    }

    searchHandler(search) {
        console.log(search)
        if (search.length !== 0 && search.trim() !== '') {
            this.setState({
                dataNotes: this.state.filteredNotes.filter(data => data.title.toLowerCase().includes(search.toLowerCase())),
            })
        } else {
            this.setState({
                dataNotes: this.state.filteredNotes,
            })
        }
    }

    addNewNoteHandler(newNoteData) {
        try {
            this.setState((prevState) => {
                return {
                    dataNotes: [newNoteData, ...prevState.dataNotes,],
                    filteredNotes: [newNoteData, ...prevState.filteredNotes,]
                }
            })
            return {
                error: false,
                message: 'Success!'
            }
        }
        catch (error) {
            return {
                error: true,
                message: 'Failed!'
            }
        }
    }

    isArchiveHandler(id) {
        console.log(id)
        let judul;
        const updateData = this.state.filteredNotes.filter(data => data.id === id)[0];
        if (updateData.archived) {
            judul = "Catatan akan diaktifkan!"
        } else {
            judul = "Catatan akan diarsipkan!"
        }
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: judul,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                const update = { ...updateData, archived: !updateData.archived };
                console.log(update)
                this.setState((dataUpdate) => {
                    return {
                        dataNotes: [
                            ...dataUpdate.dataNotes.filter(data => data.id !== id),
                            update
                        ],
                        filteredNotes: [
                            ...dataUpdate.filteredNotes.filter(data => data.id !== id),
                            update
                        ],
                    }
                });
                if (updateData.archived) {
                    toast.success('Catatan berhasil diaktifkan!');
                } else {
                    toast.success('Catatan berhasil diarsipkan!');
                }
            }
        });
    }

    onDeleteHandler(id) {
        console.log(id)
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Catatan akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.setState((data) => {
                    return {
                        dataNotes: data.dataNotes.filter(note => note.id !== id),
                        filteredNotes: data.filteredNotes.filter(note => note.id !== id),
                    }
                })
                toast.success('Catatan berhasil dihapus!');
            }
        });
    }

    render() {
        return (
            <div>
                <Header searching={this.searchHandler} />
                <Content notes={this.state.dataNotes} addNewNote={this.addNewNoteHandler} isArchived={this.isArchiveHandler} onDelete={this.onDeleteHandler} />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                />
                <Footer />
            </div >
        );
    }
}

export default NotesApp;