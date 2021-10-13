import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../reducers/User/User.reducer'
import flashCardReducer from '../reducers/FlashCard/FlashCard.reducer'
import thunk from 'redux-thunk'
import { initService } from '../services/Services'

export const store = configureStore({
  reducer: {
    user: userReducer,
    flashCard: flashCardReducer
  },
  middleware: [thunk.withExtraArgument(initService())]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
