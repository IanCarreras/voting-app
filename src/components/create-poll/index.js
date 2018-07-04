import React, { Component } from 'react'

import './index.css'

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
      <div className="popup-outer">
        <div className="popup-inner">

          <h3>Question</h3>
          <input
            className="question-input"
            name="question"
            onChange={this.handleChange}
            value={this.state.question}
            placeholder="enter question here"
          />

          <div className="element-container"><h3 className="answer-label">Answer</h3><button className="add-answer-button">+</button></div>
          <input
            className="answer-input"
            name="answer"
            onChange={this.handleChange}
            value={this.state.answers}
            placeholder="enter answer here"
          />

          <button className="submit-new-poll-button" onClick={this.handleSubmit}>Submit</button>
          <button className="close-window-button" onClick={this.props.actions.createPoll}>Close Window</button>
        </div>
      </div>
    );
  }
}

export default CreatePoll;
