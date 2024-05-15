import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    isErrorMsg: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({errorMsg, username: '', password: ''})
  }

  getLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      console.log('Dharma logged in')
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
      this.setState({isErrorMsg: true})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, isErrorMsg, errorMsg, showPassword} = this.state
    const changeInputType = showPassword ? 'text' : 'password'
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.getLoginDetails}>
          <img
            className="website-logo-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            onChange={this.onChangeUserName}
            placeholder="Username"
            value={username}
            className="login-input"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            className="login-input"
            type={changeInputType}
            id="password"
            placeholder="Password"
            onChange={this.onChangePassword}
            value={password}
          />
          <div className="login-check-box">
            <input
              type="checkBox"
              id="loginCheck"
              className="check"
              onChange={this.onChangeShowPassword}
            />
            <label className="check-label" htmlFor="loginCheck">
              Show Password
            </label>
          </div>
          <button
            className="login-button"
            type="submit"
            onClick={this.getLoginDetails}
          >
            Login
          </button>
          {isErrorMsg && <p className="error-para">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
