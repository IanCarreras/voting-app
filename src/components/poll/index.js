import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../actions'
import _ from 'lodash'

class Poll extends Component {
  constructor(props){
    super(props)
    this.state = { selectedAnswer: '' }

    this.selectAnswer = this.selectAnswer.bind(this)
    this.submitVote = this.submitVote.bind(this)
  }

  renderOptions(answers){
    return _.map(answers, (votes, answer) => {
      return <option key={answer}>{answer}</option>
    })
  }

  selectAnswer(event){
    this.setState({ selectedAnswer: event.target.value })
  }



  submitVote(){
    let pollId = this.props.match.params.id
    let pollsLessOne = this.props.polls.reduce((arr, obj) => {
    console.log(arr)
      if (pollId !== obj._id) arr.push(obj)
      return arr
    }, [])
    console.log('after reduce', pollsLessOne.length, pollsLessOne)
    this.props.actions.vote(this.state.selectedAnswer, pollId, pollsLessOne)
  }

  render() {
    const pollId = this.props.match.params.id
    const poll = this.props.polls.find((poll) => poll._id === pollId)

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
        <p>graph of poll results</p>
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
