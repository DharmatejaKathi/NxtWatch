import styled from 'styled-components'

export const VideosListItem = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 60px;
  width: 250px;
`
export const VideoImg = styled.img`
  width: 100%;
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 10px;
  align-self: flex-start;
  margin-top: 14px;
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsContainer = styled.div`
  display: flex;
`

export const VideoDetailsPara = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  margin-bottom: 3px;
  margin-right: 5px;
`
export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.headingColor};
`
