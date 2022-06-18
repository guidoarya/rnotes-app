import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
    render(){
        return(
            <div className="note-list_container">
                <h2>Note List</h2>
                <div className='note-list'>
                    <NoteItem/>
                    <NoteItem/>
                    <NoteItem/>
                    <NoteItem/>
                    <NoteItem/>
                </div>
            </div>
        )
    }
}

export default NoteList;