import React, { useEffect } from 'react'
import {
	FloatingButton,
	ListPageStyle
} from './ListPage.style'
import {
	Fab
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import { useDispatch } from 'react-redux'
import { getFlashCard } from '../../reducers/FlashCard/FlashCard.reducer'
import { FlashCardList } from '../../Components/FlashCard/FlashCardList'
import { ApplicationLayoutComponent } from '../../Components/Layout/Application.layout.component'

export const ListPage: React.FC = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const addNewCard = () => {
		history.push(ROUTES.ADD)
	}
	useEffect(() => {
		dispatch(getFlashCard())
	}, [ dispatch ])
	return (
		<ApplicationLayoutComponent>
			<ListPageStyle>
				<FlashCardList/>
				<FloatingButton>
					<Fab color="secondary" aria-label="add" onClick={ addNewCard }>
						<AddIcon/>
					</Fab>
				</FloatingButton>
			</ListPageStyle>
		</ApplicationLayoutComponent>
	)
}
