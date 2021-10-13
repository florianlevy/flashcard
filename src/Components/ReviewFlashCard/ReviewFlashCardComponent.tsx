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
  ReviewFlashCardTitleSide,
  ReviewFlashCardContent,
  ReviewFlashCardContentRating,
} from './ReviewFlashCardComponent.style'
import {
  green,
  orange,
  red,
} from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { FlashCardSide, saveRating, viewFlashCardContent } from '../../reducers/FlashCard/FlashCard.reducer'
import { getFlashCardSide } from '../../selectors/FlashCard/flashCard.selector'

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
  console.log("side is :", side)
  const ratingGreen = createMuiTheme({
    palette: {
      primary: {
        main: green[500]
      },
    },
  });
  const ratingOrange = createMuiTheme({
    palette: {
      primary: {
        main: orange[500]
      },
    },
  });
  const ratingRed = createMuiTheme({
    palette: {
      primary: {
        main: red[500]
      },
    },
  });

  const changeRating = (rating: number) => {
    dispatch(saveRating({
      flashCardId: flashCard.id!,
      rating
    }))
  }

  return (
      <ReviewFlashCardComponentStyle>
        <Fade in={true}>
          <Paper elevation={1}>
            {side === FlashCardSide.TITLE &&
            <>
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <ReviewFlashCardTitleSide>
                  <ReviewFlashCardTitle>{flashCard.title}</ReviewFlashCardTitle>
                </ReviewFlashCardTitleSide>
              </Slide>
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <IconButton color="secondary" aria-label="add an alarm" onClick={viewContent}>
                  <Icon className="fa fa-arrow-circle-right" />
                </IconButton>
              </Slide>
            </>
            }
            {side === FlashCardSide.CONTENT &&
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <ReviewFlashCardContentSide>
                <ReviewFlashCardContent>
                  <div  dangerouslySetInnerHTML={{
                    __html: flashCard.content
                  }} />
                </ReviewFlashCardContent>
                <ReviewFlashCardContentRating>
                  <ThemeProvider theme={ratingGreen}>
                    <Button variant={flashCard?.rating === 1 ? 'contained': 'outlined'} color="primary" onClick={() => { changeRating(1)}}>facil</Button>
                  </ThemeProvider>
                  <ThemeProvider theme={ratingOrange}>
                    <Button variant={flashCard?.rating === 3 ? 'contained': 'outlined'} color="primary" onClick={() => { changeRating(3)}}>medio</Button>
                  </ThemeProvider>
                  <ThemeProvider theme={ratingRed}>
                    <Button variant={flashCard?.rating === 5 ? 'contained': 'outlined'} color="primary" onClick={() => { changeRating(5)}}>dificil</Button>
                  </ThemeProvider>
                </ReviewFlashCardContentRating>
              </ReviewFlashCardContentSide>
            </Slide>
            }
          </Paper>
        </Fade>
      </ReviewFlashCardComponentStyle>
  )
}
