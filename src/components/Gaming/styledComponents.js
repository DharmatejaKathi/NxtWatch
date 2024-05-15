import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 16px;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 85%;
  background-size: cover;
  height: 90vh;
`

export const SearchButton = styled.button`
  width: 70px;
  background-color: #e2e8f0;
  border: 1px solid;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid;
  outline: none;
`
export const VideosUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  overflow-y: scroll;
  height: 80vh;
`
export const FlexContainer = styled.div`
  display: flex;
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
