import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
`
export const NoVideosContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const NoVideosImg = styled.img`
  width: 45%;
`
export const NoSaveH1 = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`
export const NoSaveP = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #475569;
`
export const TrendingFireCon = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HeadingCon = styled.div`
  padding: 30px;
  width: 100%;
  height: 15vh;
  background-color: ${props => props.bannerBg};
  display: flex;
  align-items: center;
`
export const FireContainer = styled.div`
  border-radius: 45px;
  background-color: ${props => props.bannerBgColor};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BannerH1 = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  margin-left: 20px;
  font-weight: bold;
  color: ${props => props.headingColor};
`
