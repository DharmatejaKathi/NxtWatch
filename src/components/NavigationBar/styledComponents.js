import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 15%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: ${props => props.bgColor};
`

export const HomeIcon = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  margin-bottom: 12px;
  width: 100%;
  outline: none;
  border: none;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const Para = styled.p`
  color: ${props => props.textColor};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 14px;
`
export const FollowContainerImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const FollowImg = styled.img`
  width: 40px;
  margin-right: 24px;
`
export const ContactH1 = styled.p`
  font-size: 22px;
  font-family: 'ROboto';
  color: ${props => props.textColor};
`
export const ContactP = styled.p`
  font-size: 16px;
  font-family: 'ROboto';
  font-weight: 450;
  margin-top: 30px;
  color: ${props => props.textColor};
`
export const NavUl = styled.ul`
  padding: 0px;
`
export const NavLiHome = styled.li`
  list-style-type: none;
`
export const NavLiTrending = styled.li`
  list-style-type: none;
`
export const NavLiGaming = styled.li`
  list-style-type: none;
`
export const NavLiSave = styled.li`
  list-style-type: none;
`
export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`
