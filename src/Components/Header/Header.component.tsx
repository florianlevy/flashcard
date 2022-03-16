import React from 'react'
import { HeaderStyle, HeaderTitle, HeaderMenu, Title } from './Header.component.style'

import { LogoIconComponent } from '../Icons/Logo.Icon.component'
import { MobileMenuComponent } from '../Menu/MobileMenu/MobileMenu.component'

export const HeaderComponent: React.FC = () => {

  return (
    <HeaderStyle>
      <HeaderTitle>
        <LogoIconComponent size="45px"/>
        <Title>FlashCard</Title>
      </HeaderTitle>
      <HeaderMenu>

      </HeaderMenu>
      <MobileMenuComponent />
    </HeaderStyle>
  )
}
