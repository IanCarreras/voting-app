import React from 'react'
import { Link } from 'react-router-dom';

const renderPolls = (polls) => {
  return polls.polls.map((poll, i) => {
    return (
      <div key={i} className="poll">
        <Link to={`/${poll._id}`}>{poll.question}</Link><button>X</button>
      </div>
    )
  })
}

export default renderPolls
