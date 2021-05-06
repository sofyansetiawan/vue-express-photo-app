export default class Session {

    static key = 'token'
    static emailKey = 'loggedInEmail'

    static save (token, email) {
      localStorage.setItem(Session.key, token)
      localStorage.setItem(Session.emailKey, email)
    }
  
    static destroy () {
      localStorage.removeItem(Session.key)
      localStorage.removeItem(Session.emailKey)
    }
  
    static getSession () {
      return localStorage.getItem(Session.key)
    }
  
    static getEmail () {
      return localStorage.getItem(Session.emailKey)
    }
  
    static isAuthenticated () {
      return Session.getSession() !== null
    }
  }
  