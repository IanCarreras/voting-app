import { combineReducers } from 'redux'

import polls from './pollsReducer'
import auth from './authReducer'
import createPoll from './createPollReducer'

const rootReducer = combineReducers({
  polls,
  auth,
  createPoll
})

export default rootReducer
