import {
  GET_POLLS,
  VOTE
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_POLLS:
      return action.data
    case VOTE:
      return action.polls
    default:
      return state
  }
}
