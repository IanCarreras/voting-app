import React, { Component } from 'react'

import AnswerInput from '../answer-input'
import './index.css'

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: [],
      inputFields: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addInputField = this.addInputField.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit() {
    const { question, answers } = this.state
    this.props.actions.addImage(question, answers)
  }

  addInputField() {
    const updatedArray = this.state.inputFields.concat(<AnswerInput />)
    this.setState({ inputFields: updatedArray })
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
            <button className="add-answer-button" onClick={this.addInputField}>+</button>
          </div>

          <div className="input-field-container">
            <input
              className="answer-input"
              name="answer"
              onChange={this.handleChange}
              value={this.state.answers}
              placeholder="enter answer here"
            />

            <input
              className="answer-input"
              name="answer"
              onChange={this.handleChange}
              value={this.state.answers}
              placeholder="enter answer here"
            />
            <AnswerInput />
            {this.state.inputFields}
          </div>

          <button className="submit-new-poll-button" onClick={this.handleSubmit}>Submit</button>
          <button className="close-window-button" onClick={this.props.actions.createPoll}>Close Window</button>
        </div>
      </div>
    );
  }
}

export default CreatePoll;
