import styled from 'styled-components'

export const ReviewFlashCardComponentStyle = styled.div`
  margin: 35px 25px 10px 25px;
  height: 100%;
  width: calc(100% - 50px);
  & > div {
    height: 100%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
   
  }
`

export const ReviewFlashCardTitleSide = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
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
