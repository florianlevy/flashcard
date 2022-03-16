import React, { useEffect } from 'react'
import {
  NextFlashCard,
  ReviewPageStyle,
} from './ReviewPage.style'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { getRandomFlashCard } from '../../selectors/FlashCard/flashCard.selector'
import {
  getFlashCard,
  setNewReviewedFlashCard,
} from '../../reducers/FlashCard/FlashCard.reducer'
import { ReviewFlashCardComponent } from '../../Components/ReviewFlashCard/ReviewFlashCardComponent'
import { Button } from '@material-ui/core'
import { ApplicationLayoutComponent } from '../../Components/Layout/Application.layout.component'
import { PrimaryButton } from '../../Components/Button/Button.style'

export const ReviewPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFlashCard())
  }, [dispatch])

  const changeFlashCard = () => {
    dispatch(setNewReviewedFlashCard())
  }

  const flashCard = useSelector(getRandomFlashCard)

  return (
    <ApplicationLayoutComponent>
      <ReviewPageStyle>
        <ReviewFlashCardComponent flashCard={flashCard} />
        <NextFlashCard>
          <PrimaryButton onClick={changeFlashCard}>
            Próxima carta
          </PrimaryButton>
        </NextFlashCard>
      </ReviewPageStyle>
    </ApplicationLayoutComponent>
  )
}
