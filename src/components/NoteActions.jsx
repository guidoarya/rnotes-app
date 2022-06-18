import React from 'react';

class NoteActions extends React.Component {
    render(){
        return(
                    <table className="note-actions">
                        <tr>
                            <td> <button type='submit' className='btn-delete'>Delete</button></td>
                            <td> <button type='submit' className='btn-archive'>Archive</button></td>
                        </tr>
                    </table>
        )
    }
}

export default NoteActions;