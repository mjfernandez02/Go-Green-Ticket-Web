import { Typography, Box, styled } from '@mui/material'

import theme from '@/app/theme'

export const StyledAppBar = styled(Box)({
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

const StyledLogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

export const LogoBox = (props) => (
  <StyledLogoBox {...props} sx={{ width: { xs: 110, sm: 170 }, ...props.sx }} />
)

export const MenuBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexGrow: 1,
  gap: 'clamp(12px, 3vw, 36px)',
})

export const MenuItemTypography = styled(Typography)({
  color: 'white',
  cursor: 'pointer',
  fontSize: 'clamp(14px, 2vw, 18px)',
  fontFamily: theme.typography.k2d,
  transition: 'color 180ms ease',
  '&:hover': { color: theme.palette.color.green },
})
