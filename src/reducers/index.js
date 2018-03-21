import { combineReducers } from 'redux'

import polls from './pollsReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  polls,
  auth
})

export default rootReducer
