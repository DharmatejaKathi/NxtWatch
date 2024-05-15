import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
`
export const VideoItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const VideoDetailsPara = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  margin-bottom: 3px;
  margin-right: 5px;
`
export const ViewsAndPublishedC = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const LikePara = styled.p`
  margin-left: 7px;
  color: ${props => props.likeColor};
  font-family: 'Roboto';
  font-size: 14px;
`
export const DisLikePara = styled.p`
  margin-left: 7px;
  color: ${props => props.disLikeColor};
  font-family: 'Roboto';
  font-size: 14px;
`
export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 10px;
  align-self: flex-start;
  margin-top: 14px;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.headingColor};
  font-weight: 450;
`
export const Sub = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  color: #7e858e;
  font-weight: 450;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 20px;
  color: #475569;
  margin-top: 20px;
  font-weight: 450;
`
export const SaveText = styled.p`
  margin-left: 7px;
  color: ${props => (props.color ? '#4f46e5' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 14px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  background-color: transparent;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  background-color: transparent;
`
export const SaveH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.headingColor};
`
export const SaveP = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
`
export const NoImg = styled.img`
  width: 500px;
`
export const RetryButton = styled.button`
  width: 100px;
  height: 34px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  outline: none;
  border-radius: 6px;
  font-weight: 450;
  font-size: 16px;
  cursor: pointer;
`
export const HomeContainer = styled.div`
  padding: 16px;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 85%;
  background-size: cover;
`
