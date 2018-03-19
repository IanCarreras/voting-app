import {
  GET_POLLS
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_POLLS:
      return action.data
    default:
      return state      
  }
}
