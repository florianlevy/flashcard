import { RootState } from '../../app/store'
import { UserStateType } from '../../reducers/User/User.reducer'
import { UserInfo } from '../../types/User.type'

const getUserState = (state: RootState): UserStateType => state.user

export const getIsLoading = (state: RootState): boolean => {
  return getUserState(state).isloading
}

export const getIsAuthenticate = (state: RootState): boolean => {
  return getUserState(state).isAuthenticate
}

export const getUser = (state: RootState): UserInfo | null => {
  return getUserState(state).data
}
