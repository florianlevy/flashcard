import { UserInfo } from '../../types/User.type'
import firebase from 'firebase'

export const mapCheckUserToUser = (checkUser: firebase.User): UserInfo => {
  return {
    email:  checkUser.email as string,
    name: checkUser.displayName as string,
    picture: checkUser.photoURL as string
  }
}
