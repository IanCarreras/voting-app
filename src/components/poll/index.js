import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../actions'

class Poll extends Component {
  render() {
    const pollId = this.props.match.params.id
    //const poll = this.props.polls.find((poll) => poll._id === pollId )
    console.log('props', this.props)

    return (
      <div>
        <h3></h3>
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth }) => {
  return { polls, auth }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
