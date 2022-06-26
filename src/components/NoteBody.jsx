import React from 'react';

function NoteBody ({title, date, body}){

        // let newDate = new Date()
        // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        // let fullDate = `${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`

        // console.log(fullDate)
        return(
                <div className="note-body">
                    <h3 className='note-body_title'>{title}</h3>
                    <p className='note-body_date'>{date}</p>
                    <p className='note-body_desc'>{body}</p>
                </div>
           
        )
    
}

export default NoteBody;