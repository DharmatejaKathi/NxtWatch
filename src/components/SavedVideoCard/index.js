import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import {
  SavedItemList,
  SavedImg,
  SaveH1,
  SaveP,
  ViewsC,
} from './styledComponents'

import ThemeAndVideo from '../../context/themeAndVideos'

const SavedVideoCard = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#ffffff' : '#000000'

      const {savedVideoDetails} = props
      const {
        thumbnailUrl,
        title,
        name,
        viewCount,
        publishedAt,
        id,
      } = savedVideoDetails
      return (
        <Link to={`/videos/${id}`}>
          <SavedItemList>
            <SavedImg src={thumbnailUrl} alt="video thumbnail" />
            <div>
              <SaveH1 headingColor={headingColor}>{title}</SaveH1>
              <SaveP>{name}</SaveP>
              <ViewsC>
                <SaveP>{viewCount} Views</SaveP>
                <BsDot />
                <SaveP>{publishedAt}</SaveP>
              </ViewsC>
            </div>
          </SavedItemList>
        </Link>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default SavedVideoCard
