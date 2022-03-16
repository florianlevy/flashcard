import styled from 'styled-components'
import { GradientFont } from '../Style/FontColor.style'

export const HeaderStyle = styled.header`
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
  padding: 10px 15px;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	align-items: center;
	z-index: 100;
	
  @media only screen and (min-width: 992px) {
    justify-content: flex-start;
  }
	
	svg * {
		fill: url(#color-gradient-svg);
	}
`

export const HeaderTitle = styled.section`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 700;
	font-size: 1.6rem;
	font-family: 'Kalam', Roboto, sans-serif;
`

export const Title = styled.span`
  ${GradientFont};
`

export const HeaderMenu = styled.menu`

`
