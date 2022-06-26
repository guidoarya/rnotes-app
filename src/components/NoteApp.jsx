import React from 'react';
import ArchiveList from './ArchiveList';
import Header from './Header';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import {getData} from '../utils/data';

class NoteApp extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            notes: getData(),
        }

        const searching = (search, notes) => {
            return notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onNoteListHandle = this.onNoteListHandle.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    onArchiveHandler(id){
        const data = this.state.notes.filter(note => note.id === id);
        data[0].archived = true;
        this.setState({data})
    }

    onNoteListHandle(id){
        const data = this.state.notes.filter(note => note.id === id);
        data[0].archived = false;
        this.setState({data})
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                archived: false,
              },
            ],
          };
        });
        console.log(title)
      }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <NoteInput onAddNote={this.onAddNoteHandler}/>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onNoteList={this.onNoteListHandle}/>
                <ArchiveList notes={this.state.notes} onDelete={this.onDeleteHandler} onNoteList={this.onNoteListHandle}/>
            </React.Fragment>
        )
    }
}

export default NoteApp;