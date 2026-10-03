'use client'

import { Typography, Box, styled } from '@mui/material'

import { GoGreenTicketLogo } from '@/components/images'
import theme from '@/app/theme'
import SearchBar from './SearchBar'

const StyledAppBar = styled(Box)({
  display: 'flex',
  width: '100%',
  minHeight: '90px',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  padding: '12px clamp(16px, 4vw, 64px)',
  backgroundColor: theme.palette.color.grey,
  position: 'sticky',
  top: 0,
  zIndex: 10,
  boxShadow: '0 4px 24px #0004',
  '@media (max-width: 900px)': { gap: 12, '& > :last-child': { width: '100%', marginLeft: 0 } },
})

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const MenuBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexGrow: 1,
  gap: 'clamp(12px, 3vw, 36px)',
})

const MenuItemTypography = styled(Typography)({
  color: 'white',
  cursor: 'pointer',
  fontSize: 'clamp(14px, 2vw, 18px)',
  fontFamily: theme.typography.k2d,
  transition: 'color 180ms ease',
  '&:hover': { color: theme.palette.color.green },
})

const menuItems = [
  { text: 'Home', href: '#home' },
  { text: 'Latest', href: '#latest' },
  { text: 'About', href: '#about' },
  { text: 'Help', href: '#help' },
]

const Navbar = ({ query, onQueryChange }) => {
  return (
    <StyledAppBar component='nav' aria-label='Main navigation'>
      <LogoBox
        component='a'
        href='#home'
        aria-label='Go Green Ticket home'
        sx={{ width: { xs: 110, sm: 170 } }}
      >
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
