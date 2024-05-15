import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import NavigationBar from '../NavigationBar'
import Header from '../Header'
import ThemeAndVideos from '../../context/themeAndVideos'
import SavedVideoCard from '../SavedVideoCard'

import {
  FlexContainer,
  NoVideosContainer,
  NoVideosImg,
  NoSaveH1,
  NoSaveP,
  TrendingFireCon,
  HeadingCon,
  FireContainer,
  BannerH1,
} from './styledComponents'

class SaveVideos extends Component {
  renderSavedVideos = () => (
    <ThemeAndVideos.Consumer data-testid="savedVideos">
      {value => {
        const {saveVideos, isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const bannerBg = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const bannerBgColor = isDarkTheme ? '#000000' : '#cbd5e1'

        console.log(saveVideos)
        const videosLength = saveVideos.length === 0
        return videosLength ? (
          <NoVideosContainer bgColor={bgColor}>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSaveH1 headingColor={headingColor}>
              No saved videos found
            </NoSaveH1>
            <NoSaveP>You can save your videos while watching them</NoSaveP>
          </NoVideosContainer>
        ) : (
          <TrendingFireCon bgColor={bgColor}>
            <HeadingCon bannerBg={bannerBg}>
              <FireContainer bannerBgColor={bannerBgColor}>
                <HiFire size={30} color="#ff0000" />
              </FireContainer>
              <BannerH1 headingColor={headingColor}>Saved Videos</BannerH1>
            </HeadingCon>
            <ul>
              {saveVideos.map(each => (
                <SavedVideoCard savedVideoDetails={each} key={each.title} />
              ))}
            </ul>
          </TrendingFireCon>
        )
      }}
    </ThemeAndVideos.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <FlexContainer>
          <NavigationBar />
          {this.renderSavedVideos()}
        </FlexContainer>
      </>
    )
  }
}

export default SaveVideos
