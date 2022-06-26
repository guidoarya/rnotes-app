import React from 'react';
import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';
import DeleteNotes from './DeleteNotes';
import NoteBody from './NoteBody';

function NoteItem ({id, body, title, createdAt, onDelete, archived, onArchive, onNoteList}) {
        return(
            <div className='note-item'>
                <NoteBody body={body} title={title} date={createdAt}/>
                <table className="note-actions">
                        <tbody>
                        <tr>
                            <td><DeleteNotes id={id} onDelete={onDelete}/></td>
                            <td> 
                                {!archived ? <ArchiveNotes id={id} onArchive={onArchive}/> : <ActiveNotes id={id} onNoteList={onNoteList}/>}
                            </td>
                        </tr>
                        </tbody>
                </table>
            </div>
        )
}

export default NoteItem;