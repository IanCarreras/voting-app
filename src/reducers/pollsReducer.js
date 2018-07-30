import {
  GET_POLLS,
  VOTE,
  ALREADY_VOTED,
  SAVE_POLL,
  DELETE_POLL,
  ADD_ANSWER,
  DISPLAY_POLLS
} from '../constants'

import _ from 'lodash'

const defaultState = {
  allPolls: [],
  filteredPolls: []
}

export default (state = defaultState, action) => {
  let newState = _.cloneDeep(state);
  let idx = null

  switch (action.type) {
    case GET_POLLS:
      newState.allPolls = action.data;
      newState.filteredPolls = action.data;
      return newState;
    case VOTE:
    case ADD_ANSWER:
      idx = _.findIndex(newState.allPolls, { _id: action.payload._id })
      newState.allPolls.splice(idx, 1, action.payload)
      newState.filteredPolls = newState.allPolls;
      return newState
    case ALREADY_VOTED:
      return state
    case SAVE_POLL:
      newState.allPolls = action.data;
      newState.filteredPolls = action.data;
      return newState;
    case DELETE_POLL:
      idx = _.findIndex(newState.allPolls, { _id: action.payload })
      newState.allPolls.splice(idx, 1)
      newState.filteredPolls = newState.allPolls
      return newState
    case DISPLAY_POLLS:
      if (action.payload.filterBy === 'user') {
        newState.filteredPolls = newState.allPolls.filter((poll) => {
          return poll.user === action.payload.userId;
        })
      } else if (action.payload.filterBy === 'all') {
        newState.filteredPolls = newState.allPolls;
      }
      return newState;  
    default:
      return state
  }
}
