import React from 'react'
import { FlashCard } from '../../types/FlashCard.type'
import {
  Card,
  CardActions,
  CardContent,
  Icon,
  IconButton,
} from '@material-ui/core'
import { FlashCardComponentStyle } from './FlashCardComponent.style'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'


interface FlashCardProps {
  flashCard: FlashCard
}

export const FlashCardComponent: React.FC<FlashCardProps> = ({flashCard}: FlashCardProps) => {
  const history = useHistory()
  const handleEditFlashCard = () => {
    history.push(`${ROUTES.EDIT}/${flashCard.id}`)
  }
  return (
      <FlashCardComponentStyle>
        <Card>
          <CardContent>
            {flashCard.title}
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={handleEditFlashCard}>
              <Icon className='fa fa-edit' />
            </IconButton>
          </CardActions>
        </Card>
      </FlashCardComponentStyle>
  )
}
