import React, { Component } from 'react'

import './index.css'

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit() {
    const { question, answers } = this.state
    const { actions, auth } = this.props
    const arrayAnswers = answers.split(',').map(answer => answer.trim())
    console.log('our data sent to action creator', { question, arrayAnswers, user: auth.userId })
    actions.savePoll(question, arrayAnswers, auth.userId)
    actions.getPolls()
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
          <div className="element-container">
            <h3 className="answer-label">Answer</h3>
          </div>

          <div className="input-field-container">
            <input
              className="answer-input"
              name="answers"
              placeholder="enter answer here"
              onChange={this.handleChange}
              value={this.state.answers}
            />
            <div>enter answer options seperated by comma</div>
          </div>

          <button className="submit-new-poll-button" onClick={this.handleSubmit}>Submit</button>
          <button className="close-window-button" onClick={this.props.actions.createPoll}>Close Window</button>
        </div>
      </div>
    );
  }
}

export default CreatePoll;
