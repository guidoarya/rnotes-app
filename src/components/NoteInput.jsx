import React from 'react';

class NoteInput extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1 className='header-form'>Submit Your Note</h1>
                <form className='note-input' action="/">
                    <input type="text" placeholder='Input title here...' required/>
                    <textarea type="text" className='statement-input' placeholder='Input your statement here...' required/>
                    <button type='submit' className='submit-note'>Send your note</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NoteInput;