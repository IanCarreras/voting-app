import React, { Component } from 'react'

import Polls from '../render-polls'

class Container extends Component {
  render() {
    const { polls } = this.props
    return (
      <div>
        <Polls polls={polls}/>
      </div>
    )
  }
}

export default Container
