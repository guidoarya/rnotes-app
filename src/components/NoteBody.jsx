import React from 'react';

function NoteBody ({title, date, body}){

        return(
                <div className="note-body">
                    <h3 className='note-body_title'>{title}</h3>
                    <p className='note-body_date'>{date}</p>
                    <p className='note-body_desc'>{body}</p>
                </div>
           
        )
    
}

export default NoteBody;