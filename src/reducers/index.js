import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  polls: (state = ['poll']) => state
})

export default rootReducer
