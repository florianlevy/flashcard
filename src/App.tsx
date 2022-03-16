import React, { useState } from 'react'
import './App.css'
import {
	Switch,
	Route,
	useHistory
} from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { LoginPage } from './pages/Login/LoginPage'
import { SecureRoute } from './Components/SecureRoute/SecureRoute'
import {
	BottomNavigationAction,
	Icon
} from '@material-ui/core'
import {
	useDispatch,
	useSelector
} from 'react-redux'
import {
	getIsAuthenticate,
	getUser
} from './selectors/User/user.selector'

import {
	BottomNav
} from './App.style'
import { ROUTES } from './routes/routes'
import { ListPage } from './pages/List/ListPage'
import { AddPage } from './pages/Add/AddPage'
import { EditPage } from './pages/Edit/EditPage'
import { ReviewPage } from './pages/Review/ReviewPage'
import { disconnectUser } from './reducers/User/User.reducer'
import { HeaderComponent } from './Components/Header/Header.component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'


library.add(faBars, faEye)

function App() {

	const user = useSelector(getUser)
	const isAuthenticate = useSelector(getIsAuthenticate)
	const [ value, setValue ] = useState(ROUTES.HOME)
	const dispatch = useDispatch()
	const history = useHistory()

	const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {

		setAnchorEl(null)
	}

	const disconnect = () => {
		dispatch(disconnectUser(history))
		setAnchorEl(null)
	}

	return (
		<div className="App">
			<Switch>
				<SecureRoute path="/" component={ HomePage } exact/>
				<SecureRoute path="/list" component={ ListPage } exact/>
				<SecureRoute path="/add" component={ AddPage } exact/>
				<SecureRoute path={ `${ ROUTES.EDIT }/:idFlashCard` } component={ EditPage } exact/>
				<SecureRoute path={ ROUTES.REVIEW } component={ ReviewPage } exact/>
				<Route path="/login" component={ LoginPage }/>
			</Switch>
			{ isAuthenticate &&
      <BottomNav
          value={ value }
          onChange={ (event, newValue) => {
						setValue(newValue)
						history.push(newValue.toString())
					} }
      >
          <BottomNavigationAction label="Revisāo" value={ ROUTES.REVIEW } icon={ <Icon className="fa fa-book"/> }/>
          <BottomNavigationAction label="Lista" value={ ROUTES.LIST } icon={ <Icon className="fa fa-list"/> }/>
          <svg width="0" height="0">
              <linearGradient id="color-gradient-svg" x1="0%" y1="100%" x2="100%" y2="0%" >
                  <stop stop-color="#b60da9" offset="0%" />
                  <stop  stop-color="#ffbb7d" offset="100%" />
              </linearGradient>
          </svg>
      </BottomNav>
			}
		</div>
	)
}

export default App
