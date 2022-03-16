import React, { ReactNode } from 'react'
import { ApplicationLayout, MainApplication } from './Application.layout.component.style'
import { useSelector } from 'react-redux'
import { getUser } from '../../selectors/User/user.selector'
import { HeaderComponent } from '../Header/Header.component'

interface ApplicationLayoutComponentProps {
	children: ReactNode
}

export const ApplicationLayoutComponent: React.FC<ApplicationLayoutComponentProps> = ({ children }: ApplicationLayoutComponentProps) => {
 const user = useSelector(getUser)

  return (
  	<ApplicationLayout>
		  {user && <HeaderComponent />}
		  <MainApplication>
		    { children }
		  </MainApplication>
	  </ApplicationLayout>
  )
}
