import React from 'react'

const renderPolls = (polls) => {
  return polls.polls.map((poll, i) => {
    return (
      <div key={i} className="poll">
        <a href={`/${poll._id}`}>{poll.question}</a>
      </div>
    )
  })
}

export default renderPolls
