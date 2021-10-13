import React from 'react'
import { useSelector } from 'react-redux'
import { getFlashCardList } from '../../selectors/FlashCard/flashCard.selector'
import { FlashCardListStyle } from './FlashCardList.style'
import { FlashCardComponent } from './FlashCardComponent'

export const FlashCardList: React.FC = () => {
  const flashCardList = useSelector(getFlashCardList)
  return (
    <FlashCardListStyle>
      {
       flashCardList.map(flashCard => (<FlashCardComponent key={flashCard.id} flashCard={flashCard}/>))
      }
    </FlashCardListStyle>
  )
}
