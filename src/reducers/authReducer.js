import _ from 'lodash'
import {
  CHANGE_STATUS
} from '../constants'

import AuthService from '../lib/authService';

const auth = new AuthService('M5mR8gceNB6uUm7XgdTPXI0JzgSQ7jwx', 'fretzila.auth0.com');
Object.assign(auth, { isLoggedIn: auth.loggedIn() })

export default (state = auth, action) => {
  let newState = null

  switch (action.type) {
    case CHANGE_STATUS:
      newState = _.cloneDeep(state)
      newState.isLoggedIn = action.payload
      return newState;
    default:
      return state;
  }
}
