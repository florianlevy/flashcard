import React from 'react'
import firebase from 'firebase'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ApplicationLayoutComponent } from '../../Components/Layout/Application.layout.component'

export const LoginPage: React.FC = () => {

	const history = useHistory()

	const handleClick = async () => {
		try {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
				let provider = new firebase.auth.GoogleAuthProvider()
				await firebase.auth().signInWithPopup(provider)
				history.push('/')
			})
		} catch (e) {
			console.log(e)
		}

	}
	return (
		<ApplicationLayoutComponent>
			<Button variant="outlined" color="secondary" onClick={ handleClick }>Conecte-se com Google</Button>
		</ApplicationLayoutComponent>
	)
}
