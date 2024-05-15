import styled from 'styled-components'

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const Nav = styled.nav`
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const LogoutButton = styled.button`
  width: 100px;
  height: 34px;
  border: 3px solid #3b82f6;
  color: #3b82f6;
  font-family: 'Roboto';
  background-color: transparent;
  outline: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  padding: 30px;
  text-align: center;
`
export const CancelButton = styled.button`
  width: 80px;
  height: 30px;
  border: 2px solid #7e858e;
  outline: none;
  color: #7e858e;
  border-radius: 6px;
  background-color: transparent;
  margin-right: 10px;
  font-family: 'Roboto';
  cursor: pointer;
  font-weight: 460;
`
export const ConfirmButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 6px;
  background-color: #3b82f6;
  margin-right: 10px;
  font-family: 'Roboto';
  cursor: pointer;
  font-weight: 460;
`
export const PopupPara = styled.p`
  margin-left: 7px;
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 460;
`
export const NavUl = styled.ul`
  padding: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLi = styled.li`
  list-style-type: none;
`
