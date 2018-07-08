import {
  GET_POLLS,
  VOTE,
  ALREADY_VOTED,
  SAVE_POLL
} from '../constants'

import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case GET_POLLS:
      return action.data
    case VOTE:
      const newState = _.cloneDeep(state);
      const idx = _.findIndex(newState, { _id: action.payload._id })
      newState.splice(idx, 1, action.payload);
      return newState;
    case ALREADY_VOTED:
      return state;
    case SAVE_POLL:
      return action.data;
    default:
      return state
  }
}
