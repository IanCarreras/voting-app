import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../actions'

import Polls from '../render-polls'
import './index.css'

class Container extends Component {
  render() {
    const { polls, actions, auth } = this.props
    return (
      <div>
        <Polls polls={polls} actions={actions} auth={auth}/>
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
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
