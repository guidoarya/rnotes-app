import React from 'react';
import NoteItem from './NoteItem';

class ArchiveList extends React.Component {
    render(){
        return(
            <div className="note-list_container">
                <h2>Archive List</h2>
                <div className='note-list'>
                    <NoteItem/>
                    <NoteItem/>
                </div>
            </div>
        )
    }
}

export default ArchiveList;