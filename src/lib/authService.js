import Auth0Lock from 'auth0-lock'
import { store } from '../index';

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000',
        responseType: 'token'
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  _doAuthentication(authResult) {
    this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
      if (err) return console.log(err)
      this.setToken(authResult);
      this.setUserId(profile.sub);
      store.dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          isLoggedIn: true,
          userId: profile.sub
        }
      })
    })
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken() && !!this.getUserId();
  }

  setUserId(userId) {
    localStorage.setItem('user_id', userId);
  }

  setToken(authObject) {
    localStorage.setItem('id_token', authObject.idToken)
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('user_id')
    store.dispatch({
      type: 'CHANGE_STATUS',
      payload: {
        isLoggedIn: false,
        userId: null
      }
    })
  }
}
