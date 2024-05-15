import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {IoSearchOutline} from 'react-icons/io5'

import Videos from '../Videos'
import NavigationBar from '../NavigationBar'
import ThemeAndVideo from '../../context/themeAndVideos'

import {
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeContainer,
  VideosUl,
  FlexContainer,
  NoVideosContainer,
  SaveH1,
  SaveP,
  NoImg,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updated = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: updated,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updated)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCLickUpdateList = target => {
    if (target === 'ENTER') {
      this.renderHome()
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitSearchInput = () => {
    this.getVideos()
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  renderHome = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList, searchInput} = this.state
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'

        return videosList.length === 0 ? (
          <HomeContainer bgColor={bgColor}>
            <NoVideosContainer>
              <NoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <SaveH1 headingColor={headingColor}>
                No Search results found
              </SaveH1>
              <SaveP>Try different key words or remove search filter</SaveP>
              <RetryButton type="button" onClick={this.getVideos}>
                Retry
              </RetryButton>
            </NoVideosContainer>
          </HomeContainer>
        ) : (
          <HomeContainer bgColor={bgColor}>
            <SearchContainer>
              <SearchInput
                type="search"
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onEnterSearchInput}
                placeholder="Search"
                value={searchInput}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.onCLickUpdateList}
              >
                <IoSearchOutline className="search-icon" />
              </SearchButton>
            </SearchContainer>
            <VideosUl>
              {videosList.map(each => (
                <Videos videoDetails={each} key={each.title} />
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
              <RetryButton type="button" onClick={this.getVideos}>
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
        return this.renderHome()
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

export default Home
