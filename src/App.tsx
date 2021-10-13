import React, { useState } from 'react'
import './App.css'
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { LoginPage } from './pages/Login/LoginPage'
import { SecureRoute } from './Components/SecureRoute/SecureRoute'
import {
  BottomNavigationAction,
  Toolbar,
  Icon,
  Menu,
  ButtonBase,
  MenuItem,
} from '@material-ui/core'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import {
  getIsAuthenticate,
  getUser,
} from './selectors/User/user.selector'

import {
  BottomNav,
  Header,
  SrtyledAvatar,
} from './App.style'
import { ROUTES } from './routes/routes'
import { ListPage } from './pages/List/ListPage'
import { AddPage } from './pages/Add/AddPage'
import { EditPage } from './pages/Edit/EditPage'
import { ReviewPage } from './pages/Review/ReviewPage'
import { disconnectUser } from './reducers/User/User.reducer'

function App() {

  const user = useSelector(getUser)
  const isAuthenticate = useSelector(getIsAuthenticate)
  const [value, setValue] = useState(ROUTES.HOME)
  const dispatch = useDispatch()
  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

  const disconnect = () => {
    dispatch(disconnectUser(history))
    setAnchorEl(null);
  }

  return (
      <div className="App">
        {user && <Header position="sticky">
          <Toolbar className="toolbar">
            <ButtonBase
              onClick={handleClick}
            >
              {user.name}
              <SrtyledAvatar src={user.picture} />
            </ButtonBase>
          </Toolbar>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            getContentAnchorEl={null}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={disconnect}>desconexão</MenuItem>
          </Menu>
        </Header>}
        <Switch>
          <SecureRoute path="/" component={HomePage} exact/>
          <SecureRoute path="/list" component={ListPage} exact/>
          <SecureRoute path="/add" component={AddPage} exact/>
          <SecureRoute path={`${ROUTES.EDIT}/:idFlashCard`} component={EditPage} exact/>
          <SecureRoute path={ROUTES.REVIEW} component={ReviewPage} exact/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
        {isAuthenticate &&
        <BottomNav
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
            history.push(newValue.toString())
          }}
          >
          <BottomNavigationAction label='Revisāo' value={ROUTES.REVIEW} icon={<Icon className="fa fa-book" />} />
          <BottomNavigationAction label='Lista' value={ROUTES.LIST} icon={<Icon className="fa fa-list" />}/>
        </BottomNav>
        }
      </div>
  )
}

export default App
