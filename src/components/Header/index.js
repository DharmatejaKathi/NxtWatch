import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import {IoMdMoon} from 'react-icons/io'
import ThemeAndVideo from '../../context/themeAndVideos'

import {
  ThemeButton,
  Nav,
  LogoutButton,
  PopupContainer,
  CancelButton,
  ConfirmButton,
  PopupPara,
  NavUl,
  NavLi,
} from './styledComponents'

import './index.css'

const Header = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#ffffff'
      const headingColor = isDarkTheme ? '#ffffff' : '#000000'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcon = isDarkTheme ? (
        <FiSun size={30} color="white" />
      ) : (
        <IoMdMoon size={30} />
      )

      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Nav bgColor={bgColor}>
          <NavUl>
            <NavLi>
              <Link to="/">
                <img
                  className="nav-bar-website-img"
                  src={websiteLogo}
                  alt="website logo"
                />
              </Link>
            </NavLi>

            <div className="profile-container">
              <NavLi>
                <ThemeButton data-testid="theme" onClick={onClickChangeTheme}>
                  {themeIcon}
                </ThemeButton>
              </NavLi>
              <NavLi>
                <img
                  className="profile-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavLi>
              <NavLi>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" onClick={onLogout}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer bgColor={bgColor}>
                      <PopupPara headingColor={headingColor}>
                        Are you sure, you want to logout
                      </PopupPara>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onLogout}>
                        Confirm
                      </ConfirmButton>
                    </PopupContainer>
                  )}
                </Popup>
              </NavLi>
            </div>
          </NavUl>
        </Nav>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default withRouter(Header)
