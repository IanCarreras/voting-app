import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../actions'
import _ from 'lodash'

import Chart from '../chart'

class Poll extends Component {
  constructor(props){
    super(props)
    this.state = { selectedAnswer: '' }

    this.selectAnswer = this.selectAnswer.bind(this)
  }

  renderOptions(answers){
    return _.map(answers, (votes, answer) => {
      return <option key={answer}>{answer}</option>
    })
  }

  selectAnswer(event){
    this.setState({ selectedAnswer: event.target.value })

  }

  render() {
    const pollId = this.props.match.params.id
    const poll = this.props.polls.find((poll) => poll._id === pollId )

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
          disabled={this.props.auth.isLoggedIn === false}
        >Submit</button>
        <Chart data={poll} />
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth }) => {
  return { polls, auth }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
