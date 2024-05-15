import {Link} from 'react-router-dom'

import {
  VideosListItem,
  VideoImg,
  VideoItemDetailsContainer,
  ViewsContainer,
  VideoDetailsPara,
  VideoTitle,
} from './styledComponents'
import ThemeAndVideo from '../../context/themeAndVideos'

const GamingVideoItem = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#ffffff' : '#000000'
      const {videoDetails} = props
      const {publishedAt, thumbnailUrl, id, title, viewCount} = videoDetails
      return (
        <VideosListItem>
          <Link to={`/videos/${id}`} className="Link">
            <VideoImg src={thumbnailUrl} alt="logo" />
            <VideoItemDetailsContainer>
              <div>
                <VideoTitle headingColor={headingColor}>{title}</VideoTitle>
                <ViewsContainer>
                  <VideoDetailsPara>
                    {viewCount} Watching Worldwide
                  </VideoDetailsPara>
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

export default GamingVideoItem
