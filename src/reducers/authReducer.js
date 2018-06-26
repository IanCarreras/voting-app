// import _ from 'lodash'
import {
  CHANGE_STATUS
} from '../constants'

import AuthService from '../lib/authService';

const auth = new AuthService('M5mR8gceNB6uUm7XgdTPXI0JzgSQ7jwx', 'fretzila.auth0.com');
Object.assign(auth, {
  isLoggedIn: auth.loggedIn(),
  userId: auth.getUserId() || null
})

export default (state = auth, action) => {

  switch (action.type) {
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
        userId: action.payload.userId
      });
    default:
      return state;
  }
}
