import {Link} from 'react-router-dom'
import ThemeAndVideo from '../../context/themeAndVideos'

import {
  VideosListItem,
  VideoImg,
  ProfileImg,
  VideoItemDetailsContainer,
  ViewsContainer,
  VideoDetailsPara,
  VideoTitle,
} from './styledComponents'

import './index.css'

const Videos = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#ffffff' : '#000000'
      const {videoDetails} = props
      const {
        publishedAt,
        thumbnailUrl,
        id,
        title,
        viewCount,
        channel,
      } = videoDetails
      return (
        <VideosListItem>
          <Link to={`/videos/${id}`} className="Link">
            <VideoImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoItemDetailsContainer>
              <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle headingColor={headingColor}>{title}</VideoTitle>
                <VideoDetailsPara>{channel.name}</VideoDetailsPara>
                <ViewsContainer>
                  <VideoDetailsPara>{viewCount} views</VideoDetailsPara>
                  <VideoDetailsPara> {publishedAt}</VideoDetailsPara>
                </ViewsContainer>
              </div>
            </VideoItemDetailsContainer>
          </Link>
        </VideosListItem>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default Videos
