import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { FlashCard } from '../../types/FlashCard.type'
import { Services } from '../../services/Services'
import { History } from 'history'
import { ROUTES } from '../../routes/routes'
import { mapFlashCardListToFlashCardById } from './FlashCard.mapper'
import { getRandomInt } from '../../utils/radom'
import { RootState } from '../../app/store'

export enum FlashCardSide {
  TITLE,
  CONTENT
}

export interface FlashCardById {
  [key: string]: FlashCard
}

export interface FlashCardStateType {
  isloading: boolean
  data: Array<string>
  byId: FlashCardById
  reviewed: string
  flashCardSide: FlashCardSide
}

interface SetFlashCardRatingType {
  flashCardId: string
  rating: number
}


const INITIAL_FLASHCARD_STATE: FlashCardStateType = {
  isloading: true,
  data: [],
  byId: {},
  reviewed: '',
  flashCardSide: FlashCardSide.TITLE
}

export const saveFlashcard = createAsyncThunk<Promise<void>, {flashCard: FlashCard, history: History}, {extra: Services}>(
    'saveFlashCard',
    async ({flashCard, history}, apiThunk) => {
      try {
        await apiThunk.extra.flashCard.saveFlashCard(flashCard)
        history.push(ROUTES.LIST)
      }catch (e) {
        console.log(e)
      }
    }
)

export const getFlashCard = createAsyncThunk<Promise<void>, void, {extra: Services}>(
    'getFlashCard',
    async (_, {extra, dispatch}) => {
      dispatch(setIsLoading(true))
      dispatch(setFlashCardList(await extra.flashCard.getFlashCards()))
      dispatch(setNewReviewedFlashCard())
    }
)

export const saveRating = createAsyncThunk<Promise<void>, {flashCardId: string, rating: number}, {extra: Services, state: RootState}>(
  'saveRating',
  async ({flashCardId, rating}, {extra, dispatch, getState}) => {
      dispatch(setRatingByFlashCardId({flashCardId, rating}))
    try {
      await extra.flashCard.saveFlashCard(getState().flashCard.byId[flashCardId])
    }catch(e){
      console.log(e)
    }
  }
)

const FlashCardSlice = createSlice({
  name: 'flashCard',
  initialState: INITIAL_FLASHCARD_STATE,
  reducers: {
    setIsLoading(state: FlashCardStateType, action: PayloadAction<boolean>) {
      state.isloading = action.payload
    },
    setFlashCardList(state: FlashCardStateType, action: PayloadAction<Array<FlashCard>>) {
      state.data = action.payload.map(flashcard => flashcard.id!)
      state.isloading = false
      state.byId = mapFlashCardListToFlashCardById(action.payload)
    },
    setNewReviewedFlashCard(state: FlashCardStateType) {
      const unrating = state.data.find(string => state.byId[string].rating === undefined)
      if (unrating) {
        state.reviewed = unrating
        state.flashCardSide = FlashCardSide.TITLE
      }else {
        let newCartId
        let flashCardListToReview: string[] = []
        state.data.forEach(flashCardId => {
          const rating = state.byId[flashCardId].rating!
          for(let i = 0 ; i < rating; i++) {
            flashCardListToReview.push(flashCardId)
          }
        })
        do {
          newCartId = flashCardListToReview[getRandomInt(flashCardListToReview.length)]
        }while(newCartId === state.reviewed)
        state.flashCardSide = FlashCardSide.TITLE
        state.reviewed = newCartId || ''
      }
    },
    setRatingByFlashCardId(state: FlashCardStateType, action: PayloadAction<SetFlashCardRatingType>) {
      state.byId[action.payload.flashCardId].rating = action.payload.rating
    },
    viewFlashCardContent(state: FlashCardStateType) {
      state.flashCardSide = FlashCardSide.CONTENT
    }
  }
})



export const {
  setFlashCardList,
  setIsLoading,
  setNewReviewedFlashCard,
  setRatingByFlashCardId,
  viewFlashCardContent
} = FlashCardSlice.actions

export default FlashCardSlice.reducer
