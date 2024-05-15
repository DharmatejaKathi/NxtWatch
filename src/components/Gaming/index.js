import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import GamingVideoItem from '../GamingVideoItem'
import NavigationBar from '../NavigationBar'
import Header from '../Header'
import ThemeAndVideo from '../../context/themeAndVideos'

import {
  HomeContainer,
  FlexContainer,
  VideosUl,
  LoaderContainer,
  NoVideosContainer,
  SaveH1,
  SaveP,
  NoImg,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const gamingVideosUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updated = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideosList: updated,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updated)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGaming = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'

        const {gamingVideosList} = this.state
        return (
          <HomeContainer bgColor={bgColor}>
            <VideosUl>
              {gamingVideosList.map(each => (
                <GamingVideoItem videoDetails={each} key={each.thumbnailUrl} />
              ))}
            </VideosUl>
          </HomeContainer>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  renderFailureView = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'
        return (
          <HomeContainer bgColor={bgColor}>
            <NoVideosContainer>
              <NoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <SaveH1 headingColor={headingColor}>
                Oops! Something Went Wrong
              </SaveH1>
              <SaveP>
                We are having some trouble to complete your request. Please try
                again.
              </SaveP>
              <RetryButton type="button" onClick={this.getGamingVideos}>
                Retry
              </RetryButton>
            </NoVideosContainer>
          </HomeContainer>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  renderLoader = () => (
    <LoaderContainer className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFinalJobs = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGaming()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <FlexContainer>
          <NavigationBar />
          {this.renderFinalJobs()}
        </FlexContainer>
      </>
    )
  }
}

export default Gaming
