import { FlashCardById } from './FlashCard.reducer'
import { FlashCard } from '../../types/FlashCard.type'

export const mapFlashCardListToFlashCardById = (flashCardList: Array<FlashCard>): FlashCardById => {
  return flashCardList.reduce((acc:{[key:string]:FlashCard}, flashCard: FlashCard) => {
    acc[flashCard.id as string] = flashCard
    return acc
  }, {})
}
