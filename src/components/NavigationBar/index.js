import {Component} from 'react'
import {Link} from 'react-router-dom'

import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'

import {
  NavContainer,
  HomeIcon,
  Para,
  FollowContainerImg,
  FollowImg,
  ContactH1,
  ContactP,
  NavUl,
  NavLiHome,
  NavLiTrending,
  NavLiGaming,
  NavLiSave,
  FollowContainer,
} from './styledComponents'
import ThemeAndVideo from '../../context/themeAndVideos'

class NavigationBar extends Component {
  renderTabItem = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value

        const onClickHomeTab = () => {
          activeTabItem('HOME')
        }
        const onClickTrendingTab = () => {
          activeTabItem('TRENDING')
        }
        const onClickGamingTab = () => {
          activeTabItem('GAMING')
        }
        const onClickSaveVideoTab = () => {
          activeTabItem('SAVE VIDEOS')
        }
        const bgColor = isDarkTheme ? '#181818' : '#ffffff'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const homeActiveColor = activeTab === 'HOME' ? '#ff0b37' : {textColor}
        const trendingActiveColor =
          activeTab === 'TRENDING' ? '#ff0b37' : {textColor}
        const gamingActiveColor =
          activeTab === 'GAMING' ? '#ff0b37' : {textColor}
        const SaveActiveColor =
          activeTab === 'SAVE VIDEO' ? '#ff0b37' : {textColor}

        return (
          <NavContainer bgColor={bgColor}>
            <NavUl>
              <NavLiHome>
                <Link to="/" className="Link">
                  <HomeIcon type="button" onClick={onClickHomeTab}>
                    <MdHome size={24} color={homeActiveColor} />
                    <Para textColor={textColor}>Home</Para>
                  </HomeIcon>
                </Link>
              </NavLiHome>
              <NavLiTrending>
                <Link to="/trending" className="Link">
                  <HomeIcon type="button" onClick={onClickTrendingTab}>
                    <HiFire size={24} color={trendingActiveColor} />
                    <Para textColor={textColor}>Trending</Para>
                  </HomeIcon>
                </Link>
              </NavLiTrending>
              <NavLiGaming>
                <Link to="/gaming" className="Link">
                  <HomeIcon type="button" onClick={onClickGamingTab}>
                    <SiYoutubegaming size={24} color={gamingActiveColor} />
                    <Para textColor={textColor}>Gaming</Para>
                  </HomeIcon>
                </Link>
              </NavLiGaming>
              <NavLiSave>
                <Link to="/saved-videos" className="Link">
                  <HomeIcon
                    type="button"
                    bgColor={bgColor}
                    onClick={onClickSaveVideoTab}
                  >
                    <RiPlayListAddLine size={24} color={SaveActiveColor} />
                    <Para textColor={textColor}>Saved Videos</Para>
                  </HomeIcon>
                </Link>
              </NavLiSave>
            </NavUl>
            <FollowContainer>
              <ContactH1 textColor={textColor}>CONTACT US</ContactH1>
              <FollowContainerImg>
                <FollowImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <FollowImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <FollowImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FollowContainerImg>
              <ContactP textColor={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactP>
            </FollowContainer>
          </NavContainer>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  render() {
    return <>{this.renderTabItem()}</>
  }
}
export default NavigationBar
