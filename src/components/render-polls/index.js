import React from 'react'
import { Link } from 'react-router-dom';

const renderPolls = (props) => {
  return props.polls.map((poll, i) => {
    return (
      <div key={i} className="poll">
        <Link to={`/${poll._id}`}>{poll.question}</Link>
        { props.auth.isLoggedIn && <button onClick={() => { return props.actions.deletePoll(poll._id) }}>X</button> }
      </div>
    )
  })
}

export default renderPolls
