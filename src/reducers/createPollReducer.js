import { CREATE_POLL } from '../constants'

export default (state = false, action) => {
  switch (action.type) {
    case CREATE_POLL:
      return !state;
    default:
      return state;
  }
}
