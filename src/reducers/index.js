import { combineReducers } from 'redux'

import polls from './pollsReducer'

const rootReducer = combineReducers({
  polls
})

export default rootReducer
