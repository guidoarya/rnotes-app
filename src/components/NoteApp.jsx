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
            searchValue: '',
            activeNote: [],
            archiveNote: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onNoteListHandle = this.onNoteListHandle.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
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
        let newDate = new Date()
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let fullDate = `${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`

        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                archived: false,
                createdAt: fullDate,
              },
            ],
          };
        });
      }

    activeNotes(){
      const dataActiveNote = this.state.notes.filter(note => note.archived === false)
      return dataActiveNote;
    }

    archiveNote(){
      const dataArchiveNote = this.state.notes.filter(note => note.archived === true)
      return dataArchiveNote;
    }

    onSearchHandler(value) {
        this.setState(() => {
          return {
            searchValue: value,
          };
        })
    };

    searchingFilter(data){
      return data.filter(note => note.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    
    render(){
        return(
            <>
                <Header onSearch={this.onSearchHandler}/>
                <NoteInput onAddNote={this.onAddNoteHandler}/>
                <div className="note-list_container">
                  <h2>Note List</h2>
                  {this.searchingFilter(this.searchingFilter(this.activeNotes())).length === 0 ?
                    (
                      <p className='not-found'>Your note doesn't exist</p>
                    ) : (
                    <NoteList notes={this.searchingFilter(this.activeNotes())} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onNoteList={this.onNoteListHandle}/>
                    )
                  }
                </div>
                <div className="note-list_container">
                  <h2>Archive List</h2>
                  {this.searchingFilter(this.searchingFilter(this.archiveNote())).length === 0 ?
                    (
                      <p className='not-found'>Your archived note doesn't exist</p>
                    ) : (
                      <ArchiveList notes={this.searchingFilter(this.archiveNote())} onDelete={this.onDeleteHandler} onNoteList={this.onNoteListHandle}/>
                    )
                  }
                </div>
               
            </>
        )
    }
}

export default NoteApp;