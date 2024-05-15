import {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Header from '../Header'

import {
  HomeContainer,
  NoVideosContainer,
  SaveH1,
  SaveP,
  NoImg,
  FlexContainer,
} from './styledComponents'
import ThemeAndVideo from '../../context/themeAndVideos'

class NotFound extends Component {
  renderNotFound = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'
        return (
          <HomeContainer bgColor={bgColor}>
            <NoVideosContainer>
              <NoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <SaveH1 headingColor={headingColor}>Page Not Found</SaveH1>
              <SaveP>
                We are sorry, the page you requested could not be found.
              </SaveP>
            </NoVideosContainer>
          </HomeContainer>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <FlexContainer>
          <NavigationBar />
          {this.renderNotFound()}
        </FlexContainer>
      </>
    )
  }
}

export default NotFound
