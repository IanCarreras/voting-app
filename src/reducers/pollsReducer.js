import {
  GET_POLLS,
  VOTE
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
    default:
      return state
  }
}
