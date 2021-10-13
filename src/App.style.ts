import styled from 'styled-components'
import {
  AppBar,
  BottomNavigation,
  Avatar
} from '@material-ui/core'

export const Header = styled(AppBar)`
  .toolbar {
    display: flex;
    justify-content: flex-end;
  }
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
