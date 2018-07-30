import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../actions'
import _ from 'lodash'

import Chart from '../chart'
import './index.css'

class Poll extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAnswer: '',
      newAnswer: '',
      isValidAnswer: false
     }

    this.selectAnswer = this.selectAnswer.bind(this)
    this.submitVote = this.submitVote.bind(this)
    this.renderAddOption = this.renderAddOption.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  renderOptions(answers){
    return _.map(answers, (votes, answer) => {
      return <option key={answer}>{answer}</option>
    })
  }

  selectAnswer(event){
    this.setState({ selectedAnswer: event.target.value })
  }

  handleChange(event) {
    const pollId = this.props.match.params.id
    const poll = this.props.polls.find((poll) => poll._id === pollId)
    let isValidAnswer = false
    const existingItems = Object.keys(poll.answers)
    if (this.state.newAnswer.trim().length && !_.includes(existingItems, event.target.value)) {
      isValidAnswer = true
    }
    this.setState({
      newAnswer: event.target.value,
      isValidAnswer
    })
  }

  submitVote(){
    const { match: { params: { id } }, auth: { userId } } = this.props
    const { selectedAnswer } = this.state;
    this.props.actions.vote(selectedAnswer, id, userId);
  }

  renderAddOption() {
    return (
      <div>
        <input
          type="text"
          placeholder="add option"
          value={this.state.newAnswer}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.actions.addAnswer(this.state.newAnswer, this.props.match.params.id)
            this.setState({ newAnswer: '' })
          }}
          disabled={!this.state.isValidAnswer}
        >Add Option</button>
      </div>
    )
  }

  render() {
    const pollId = this.props.match.params.id
    const poll = this.props.polls.find((poll) => poll._id === pollId)
    const { isLoggedIn, userId } = this.props.auth;

    if (!poll) {
      return (
        <div>
          <h2>loading poll...</h2>
        </div>
      )
    }

    return (
      <div>
        <h3>{poll.question}</h3>
        <select
          onChange={this.selectAnswer}
          value={this.state.selectedAnswer}
        >
          <option
            value=""
            disabled
            hidden
          >choose here</option>
          {this.renderOptions(poll.answers)}
        </select>
        <button
          onClick={this.submitVote}
        >Submit</button>
        {isLoggedIn && userId && this.renderAddOption()}
        <Chart data={poll.answers} />
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth }) => {
  return {
    polls: polls.filteredPolls,
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
