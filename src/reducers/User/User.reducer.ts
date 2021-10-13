import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import firebase from 'firebase'
import { UserInfo } from '../../types/User.type'
import { mapCheckUserToUser } from './User.mapper'
import { History } from 'history'
import { ROUTES } from '../../routes/routes'

export interface UserStateType {
  isloading: boolean
  isAuthenticate: boolean
  data: UserInfo | null
}

const INITIAL_USER_STATE: UserStateType = {
  isloading: true,
  isAuthenticate: false,
  data: null
}

export const checkUser = createAsyncThunk(
    'checkuser',
    async (_, { dispatch}) =>{
     firebase.auth().onAuthStateChanged((user) => {
       dispatch(setIsAuthenticate(user !== null))
       if(user) {
          dispatch(setUser(mapCheckUserToUser(user)))
       }
     });
    }
)

export const disconnectUser = createAsyncThunk(
    'disconnection',
    async (history: History, { dispatch}) => {
      await firebase.auth().signOut()
      dispatch(setUser(null))
      history.push(ROUTES.LOGIN)
    }
)

const UserSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {
    setIsAuthenticate(state: UserStateType, action: PayloadAction<boolean>) {
      state.isAuthenticate = action.payload
      state.isloading = false
    },
    setUser(state: UserStateType , action: PayloadAction<UserInfo | null>) {
      state.data = action.payload
    }
  }
})

export const {
  setUser,
  setIsAuthenticate
} = UserSlice.actions

export default UserSlice.reducer
