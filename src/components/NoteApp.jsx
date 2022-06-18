import React from 'react';
import ArchiveList from './ArchiveList';
import Header from './Header';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <NoteInput/>
                <NoteList/>
                <ArchiveList/>
            </React.Fragment>
        )
    }
}

export default NoteApp;