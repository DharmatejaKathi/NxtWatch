import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'

import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeAndVideo from '../../context/themeAndVideos'

import NavigationBar from '../NavigationBar'

import {
  FlexContainer,
  VideoItemContainer,
  ViewsContainer,
  VideoDetailsPara,
  ViewsAndPublishedC,
  LikeAndSaveContainer,
  LikeContainer,
  LikePara,
  ProfileImg,
  ProfileContainer,
  Name,
  Description,
  Sub,
  SaveText,
  LoaderContainer,
  NoVideosContainer,
  SaveH1,
  SaveP,
  NoImg,
  RetryButton,
  HomeContainer,
  DisLikePara,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideosDetails extends Component {
  state = {
    videoDetails: [],
    isVideoSaved: false,
    like: false,
    disLike: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const update = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        description: data.video_details.description,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      console.log(update)
      this.setState({
        videoDetails: update,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoDetails = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {videoDetails, isVideoSaved, like, disLike} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImageUrl,
          name,
          subscriberCount,
          description,
          id,
        } = videoDetails

        const {addToSaveVideos, removeSaveVideos, isDarkTheme} = value

        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const addOrRemoveVideo = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...videoDetails, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({isVideoSaved: !prev.isVideoSaved}),
            addOrRemoveVideo,
          )
        }

        const isLiked = () => {
          this.setState(prev => ({like: !prev.like, disLike: false}))
        }

        const isDisLiked = () => {
          this.setState(prev => ({disLike: !prev.disLike, like: false}))
        }

        const likeColor = like ? '#2563eb' : '#64748b'
        const disLikeColor = disLike ? '#2563eb' : '#64748b'
        const savedVideText = isVideoSaved ? 'Saved' : 'Save'

        return (
          <VideoItemContainer bgColor={bgColor} data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} width="100%" height="400px" />
            <Name headingColor={headingColor}>{title}</Name>
            <ViewsContainer>
              <ViewsAndPublishedC>
                <VideoDetailsPara>{viewCount} views</VideoDetailsPara>
                <VideoDetailsPara> {publishedAt}</VideoDetailsPara>
              </ViewsAndPublishedC>
              <LikeAndSaveContainer>
                <LikeContainer onClick={isLiked}>
                  <BiLike size={20} color={likeColor} />
                  <LikePara likeColor={likeColor}>Like</LikePara>
                </LikeContainer>
                <LikeContainer onClick={isDisLiked}>
                  <BiDislike size={20} color={disLikeColor} />
                  <DisLikePara disLikeColor={disLikeColor}>Dislike</DisLikePara>
                </LikeContainer>
                <LikeContainer onClick={saveVideoToList}>
                  <RiPlayListAddLine
                    size={20}
                    color={isVideoSaved ? '#4f46e5' : '#616e7c'}
                  />
                  <SaveText color={isVideoSaved}>{savedVideText}</SaveText>
                </LikeContainer>
              </LikeAndSaveContainer>
            </ViewsContainer>
            <hr />
            <ProfileContainer>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <div>
                <Name headingColor={headingColor}>{name}</Name>
                <Sub>{subscriberCount} Subscribers</Sub>
                <Description>{description}</Description>
              </div>
            </ProfileContainer>
          </VideoItemContainer>
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
              <RetryButton type="button" onClick={this.getVideoDetails}>
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
        return this.renderVideoDetails()
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
      <div data-testid="videoItemDetails">
        <Header />
        <FlexContainer>
          <NavigationBar />
          {this.renderFinalJobs()}
        </FlexContainer>
      </div>
    )
  }
}

export default VideosDetails
