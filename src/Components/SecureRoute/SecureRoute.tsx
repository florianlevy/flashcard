/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect,
} from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import {
  getIsAuthenticate,
  getIsLoading,
} from '../../selectors/User/user.selector'
import { checkUser } from '../../reducers/User/User.reducer'

export const SecureRoute: React.ComponentType<RouteProps> = ({ component: Component, ...rest }: any) => {

  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const isAuthenticate = useSelector(getIsAuthenticate)

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])


  if (isLoading) {
    return (<div>isLoading</div>)
  }

  return (
    <Route
        {...rest}
        render={(routeProps) => (
          isAuthenticate ? (<Component {...routeProps} />) :
              (<Redirect to={{pathname: '/login'}} />)
        )}
    />
  )
}
