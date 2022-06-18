import React from 'react';

class NoteBody extends React.Component {

    render(){
        let date = new Date();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let fullDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
        return(
            <React.Fragment>
                <div className="note-body">
                    <h3 className='note-body_title'>Ini adalah title</h3>
                    <p className='note-body_date'>{fullDate}</p>
                    <p className='note-body_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                </div>
            </React.Fragment>
        )
    }
}

export default NoteBody;