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
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

    isArchiveHandler(id) {
        console.log(id)
    }

    onDeleteHandler(id) {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
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
                toast.success('Note deleted!');
            }
        });
    }

    render() {
        return (
            <div>
                <Header searching={this.searchHandler} />
                <Content notes={this.state.dataNotes} isArchived={this.isArchiveHandler} onDelete={this.onDeleteHandler} />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Footer />
            </div >
        );
    }
}

export default NotesApp;