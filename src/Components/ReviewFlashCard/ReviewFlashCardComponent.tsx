import React from 'react'
import { FlashCard } from '../../types/FlashCard.type'
import {
  Button,
  createMuiTheme,
  Fade,
  Icon,
  IconButton,
  Paper,
  Slide,
  ThemeProvider
} from '@material-ui/core'
import {
  ReviewFlashCardComponentStyle,
  ReviewFlashCardContentSide,
  ReviewFlashCardTitle,
  ReviewFlashCardQuestionSide,
  ReviewFlashCardContent,
  ReviewFlashCardContentRating,
  ReviewContent,
  ReviewFlashCardTitleSide,
} from './ReviewFlashCardComponent.style'
import {
  green,
  orange,
  red,
} from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { FlashCardSide, saveRating, viewFlashCardContent } from '../../reducers/FlashCard/FlashCard.reducer'
import { getFlashCardSide } from '../../selectors/FlashCard/flashCard.selector'
import { PrimaryButton, PrimaryOutlineButton } from '../Button/Button.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ReviewFlashCardComponentProps {
  flashCard: FlashCard | undefined
}

export const ReviewFlashCardComponent: React.FC<ReviewFlashCardComponentProps> = ({flashCard}: ReviewFlashCardComponentProps) => {
  const side = useSelector(getFlashCardSide)
  const dispatch = useDispatch()

  const viewContent = () => {
    dispatch(viewFlashCardContent())
  }
  if (!flashCard) {
    return (<div>Nenhum cartāo disponível !</div>)
  }

  const changeRating = (rating: number) => {
    dispatch(saveRating({
      flashCardId: flashCard.id!,
      rating
    }))
  }

  return (
      <ReviewFlashCardComponentStyle>
	      <ReviewContent>
            {side === FlashCardSide.TITLE &&
            <>
              <ReviewFlashCardTitleSide>
                Pergunta ? / Tema
              </ReviewFlashCardTitleSide>
                <ReviewFlashCardQuestionSide>
                  <ReviewFlashCardTitle>{flashCard.title}</ReviewFlashCardTitle>
                </ReviewFlashCardQuestionSide>
                <PrimaryOutlineButton color="secondary" aria-label="add an alarm" onClick={viewContent}>
                  <FontAwesomeIcon icon="eye" size="2x"/> Revelar
                </PrimaryOutlineButton>
            </>
            }
            {side === FlashCardSide.CONTENT &&
              <ReviewFlashCardContentSide>
                <ReviewFlashCardContent>
                  <div  dangerouslySetInnerHTML={{
                    __html: flashCard.content
                  }} />
                </ReviewFlashCardContent>
              </ReviewFlashCardContentSide>
            }
	      </ReviewContent>
      </ReviewFlashCardComponentStyle>
  )
}
