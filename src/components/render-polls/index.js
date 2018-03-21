import React from 'react'

const renderPolls = (polls) => {
  return polls.polls.map((poll, i) => {
    return (
      <div key={i} className="poll">
        <h3>{poll.question}</h3>
      </div>
    )
  })
}

export default renderPolls
