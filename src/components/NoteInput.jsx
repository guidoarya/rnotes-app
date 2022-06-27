import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      count: 50,
    };

    this.onTitleChangeEventHandler =
      this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler =
      this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.handleWordCount = this.handleWordCount.bind(this);
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

  handleWordCount(event) {
    this.onTitleChangeEventHandler(event);
    this.setState({
      [event.target.name]: event.target.value.slice(0, 50),
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <>
        <h1 className="header-form">Submit Your Note</h1>
        <form className="note-input" action="/">
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Input title here..."
            onChange={this.handleWordCount}
            required
          />
          <p className="max-char">
            {this.state.title.length} / {this.state.count}
          </p>
          <br />
          <textarea
            type="text"
            value={this.state.body}
            className="statement-input"
            placeholder="Input your statement here..."
            onChange={this.onBodyChangeEventHandler}
            required
          />
          <button
            type="submit"
            className="submit-note"
            onClick={this.onSubmitEventHandler}
          >
            Send your note
          </button>
        </form>
      </>
    );
  }
}

export default NoteInput;
