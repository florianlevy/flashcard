import styled from 'styled-components'
import {
  BottomNavigation,
  Avatar
} from '@material-ui/core'

export const Header = styled.header`
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 10px 15px;
`

export const SrtyledAvatar = styled(Avatar)`
  margin-left: 15px;
`

export const BottomNav = styled(BottomNavigation)`
 position: fixed;
 width: 100%;
 bottom: 0;
  @media (min-width: 992px) {
    display: none;
  }
`
