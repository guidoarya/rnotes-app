import React from 'react';
import NoteActions from './NoteActions';
import NoteBody from './NoteBody';

class NoteItem extends React.Component {
    render(){
        return(
            <div className='note-item'>
                <NoteBody/>
                <NoteActions/>
            </div>
        )
    }
}

export default NoteItem;