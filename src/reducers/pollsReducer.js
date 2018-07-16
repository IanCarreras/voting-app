import {
  GET_POLLS,
  VOTE,
  ALREADY_VOTED,
  SAVE_POLL,
  DELETE_POLL,
  ADD_ANSWER
} from '../constants'

import _ from 'lodash'

export default (state = [], action) => {
  let newState = []
  let idx = null

  switch (action.type) {
    case GET_POLLS:
      return action.data
    case VOTE:
    case ADD_ANSWER:
      newState = _.cloneDeep(state)
      idx = _.findIndex(newState, { _id: action.payload._id })
      newState.splice(idx, 1, action.payload)
      return newState
    case ALREADY_VOTED:
      return state
    case SAVE_POLL:
      return action.data
    case DELETE_POLL:
      newState = _.cloneDeep(state)
      idx = _.findIndex(newState, { _id: action.payload })
      newState.splice(idx, 1)
      return newState
    default:
      return state
  }
}
