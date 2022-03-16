import styled, { keyframes } from 'styled-components'
import { GradientFont } from '../../Style/FontColor.style'

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`

export const enterRight = keyframes`
  0% {
    right: -250px;
  }
  100% {
    right: 0;
  }
`

export const BurgerMenuButton = styled.button`
	position: absolute;
	right: 15px;
	border: none;
	background: transparent;
	cursor: pointer;
	
  @media only screen and (min-width: 992px) {
		display: none;
  }
`

export const MenuBackDrop = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,.4);
	position: absolute;	
	top: 0;
	backdrop-filter: blur(2px);
  visibility: hidden;
  transition: all 1s cubic-bezier(0.000, 1.065, 0.135, 1.010); /* custom */
  transition-timing-function: cubic-bezier(0.000, 1.065, 0.135, 1.010); /* custom */
  opacity: 0;
	&.open {
		visibility: visible;
		opacity: 1;
	}
`

export const MenuMobile = styled.menu`
	width: 250px;
	background: white;
	height: 100vh;
  position: absolute;
	top: 0;
	right: -250px;
	z-index: 200;
	transition: right .5s cubic-bezier(.03,.86,.53,1);
  transition-timing-function: cubic-bezier(.03,.86,.53,1);
	padding: 15px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	
	&.open {
		right: 0;
	}
`
export const AvatarImage = styled.img`
	border-radius: 50%;
	width: 75px;
`
export const UserName = styled.div`
	font-weight: bold;
`

export const MenuItem = styled.a`
	width: 100%;
	cursor: pointer;
	padding: 10px 0;
	
	&:hover {
		${GradientFont};
	}
`
