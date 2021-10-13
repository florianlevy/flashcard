import { RootState } from '../../app/store'
import { FlashCard } from '../../types/FlashCard.type'
import { FlashCardSide } from '../../reducers/FlashCard/FlashCard.reducer'

export const getFlashCardState = (state: RootState) => state.flashCard
export const getFlashCardList = (state: RootState): Array<FlashCard> => getFlashCardState(state).data.map(id => getFlashCardById(id)(state)!)
export const getFlashCardReviewedId = (state: RootState): string => getFlashCardState(state).reviewed
export const getFlashCardById = (id:string) => (state: RootState): FlashCard | undefined => {
  return getFlashCardState(state).byId[id]
}

export const getRandomFlashCard = (state: RootState): FlashCard | undefined => {
  const flashCardReviewedId = getFlashCardReviewedId(state)
  return getFlashCardById(flashCardReviewedId)(state)
}

export const getFlashCardSide = (state: RootState): FlashCardSide => getFlashCardState(state).flashCardSide
