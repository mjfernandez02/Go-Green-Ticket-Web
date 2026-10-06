'use client'

import { GoGreenTicketLogo } from '@/components/images'
import SearchBar from './SearchBar'
import { StyledAppBar, LogoBox, MenuBox, MenuItemTypography } from './styles'
import { menuItems } from './data'

const Navbar = ({ query, onQueryChange }) => {
  return (
    <StyledAppBar component='nav' aria-label='Main navigation'>
      <LogoBox component='a' href='#home' aria-label='Go Green Ticket home'>
        <GoGreenTicketLogo width={170} height={80} />
      </LogoBox>

      <MenuBox>
        {menuItems.map(({ text, href }) => (
          <MenuItemTypography component='a' key={text} href={href}>
            {text}
          </MenuItemTypography>
        ))}
      </MenuBox>

      <SearchBar query={query} onQueryChange={onQueryChange} />
    </StyledAppBar>
  )
}

export default Navbar
