import styled from 'styled-components'
import { GradientFont } from '../Style/FontColor.style'

export const PrimaryButton = styled.button`
	padding: 20px 25px;
	border: none;
	border-radius: 100px;
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: bold;
	font-size: 1rem;
  background: rgb(182,13,169);
  background: linear-gradient(47deg, rgba(182,13,169,1) 0%, rgba(255,187,125,1) 100%);
	color: white;
`

export const PrimaryOutlineButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  position: relative;
  z-index: 1;
	color: rgb(182,13,169);
	
	&:after,&:before {
    content: ' ';
    position: absolute;
    border-radius: 99px;
	}
	
	&:before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    background: rgb(182,13,169);
    background: linear-gradient(47deg, rgba(182,13,169,1) 0%, rgba(255,187,125,1) 100%);
  }
	
	&:after {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    transition: all 0.6s ease-in-out;
	}
	
`
