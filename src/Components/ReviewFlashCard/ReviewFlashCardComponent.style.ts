import styled from 'styled-components'
import { GradientFont } from '../Style/FontColor.style'

export const ReviewFlashCardComponentStyle = styled.div`
  margin: 10px 15px 10px 15px;
  height: calc(100vh - 250px);
	
`
export const ReviewContent = styled.article`
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
	background: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
	padding: 10px 0;
`
export const ReviewFlashCardTitleSide = styled.h2`
  ${GradientFont};
`

export const ReviewFlashCardQuestionSide = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
	height: 90%;
`

export const ReviewFlashCardTitle = styled.div`
  font-weight: bold;
`

export const ReviewFlashCardContentSide = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ReviewFlashCardContent = styled.div`
  overflow: scroll;
  & > div {
    padding: 45px;
    max-height: calc(100vh - 400px);
    text-align: left;
    width: calc(100% - 90px);
  }
`

export const ReviewFlashCardContentRating = styled.div`
  align-self: center;
  button {
    margin: 0 10px;
  }
`
