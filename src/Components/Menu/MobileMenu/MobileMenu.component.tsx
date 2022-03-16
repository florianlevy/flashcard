import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BurgerMenuButton, MenuBackDrop, MenuMobile, AvatarImage, UserName, MenuItem } from './MobileMenu.component.style'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../selectors/User/user.selector'
import { useHistory } from 'react-router-dom'
import { disconnectUser } from '../../../reducers/User/User.reducer'


export const MobileMenuComponent: React.FC = (p) => {
	const [ active, setActive ] = useState<boolean>(false)
	const user = useSelector(getUser)
	const dispatch = useDispatch()
	const history = useHistory()

	const handlerDisconnect = () => {
		dispatch(disconnectUser(history))
	}

	return (
		<>
			<BurgerMenuButton onClick={ () => setActive(true) }>
				<FontAwesomeIcon icon="bars" size="2x"/>
			</BurgerMenuButton>
			{
				<>
            <MenuBackDrop className={active?'open':''} onClick={ () => setActive(false) }/>
            <MenuMobile className={active?'open':''}>
		            <AvatarImage src={user?.picture} alt="avatar"/>
		            <UserName>{user?.name}</UserName>
		            <MenuItem onClick={handlerDisconnect}>Desconexāo</MenuItem>
            </MenuMobile>
        </>
			}
		</>
	)
}
