import React from 'react';

class NoteInput extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            title: event.target.value,
          };
        });
      }
    
      onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            body: event.target.value,
          };
        });
      }
    
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.onAddNote(this.state);
      }
    
    render(){
        return(
            <React.Fragment>
                <h1 className='header-form'>Submit Your Note</h1>
                <form className='note-input' action="/">
                    <input type="text" value={this.state.title} placeholder='Input title here...' onChange={this.onTitleChangeEventHandler} required/>
                    <textarea type="text" value={this.state.body} className='statement-input' placeholder='Input your statement here...' onChange={this.onBodyChangeEventHandler} required/>
                    <button type='submit' className='submit-note' onClick={this.onSubmitEventHandler}>Send your note</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NoteInput;