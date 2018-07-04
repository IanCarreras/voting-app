import React, { Component } from 'react'

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit() {
    const { question, answers } = this.state
    this.props.actions.addImage(question, answers)
  }

  render() {
    return (
      <div className="popup-pin">
        <div className="popup-inner">

          <h3>Question</h3>
          <input
            name="question"
            onChange={this.handleChange}
            value={this.state.question}
          />

          <h3>Answer</h3>
          <input
            name="answer"
            onChange={this.handleChange}
            value={this.state.answers}
          />

          <button onClick={this.handleSubmit}>Ok</button>
          <button onClick={this.props.actions.togglePopup}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default NewPinPopup;
