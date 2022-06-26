import React from 'react';
import NoteItem from './NoteItem';

function ArchiveList ({notes, onDelete, onArchive, onNoteList}){
   
        return(
            <div className="note-list_container">
                <h2>Archived List</h2>
                <div className='note-list'>
                    {
                        notes.map(function(note) {
                            if(note.archived === true){
                                return <NoteItem {...note} key={note.id} onDelete={onDelete} onArchive={onArchive} onNoteList={onNoteList} id={note.id}/>
                            }
                            return false;
                        })
                    }
                </div>
            </div>
        )

}

export default ArchiveList;