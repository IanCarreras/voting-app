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
  }

  _doAuthentication(authResult) {
    this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
      if (err) return console.log(err)
      this.setToken(authResult)
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
    return !!this.getToken()
  }

  setToken(authObject) {
    localStorage.setItem('id_token', authObject.idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
    store.dispatch({
      type: 'CHANGE_STATUS',
      payload: {
        isLoggedIn: false,
        userId: null
      }
    })
  }
}
