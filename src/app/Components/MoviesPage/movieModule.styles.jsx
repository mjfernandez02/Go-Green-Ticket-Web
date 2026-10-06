import { styled } from '@mui/system'
import { Box, Button, Typography } from '@mui/material'

import theme from '@/app/theme'

export const EventContainer = styled(Box)({
  display: 'flex',
  padding: '24px clamp(16px, 4vw, 64px)',
  textAlign: 'center',
  fontFamily: theme.typography.k2d,
  width: '100%',
  gap: 20,
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const EventTitle = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  border: `1.5px solid ${theme.palette.color.green}`,
  borderRadius: '10px',
  fontFamily: theme.typography.k2d,
  color: 'white',
  fontSize: 'clamp(24px, 3vw, 36px)',
  backgroundColor: theme.palette.color.grey,
  padding: '3px 10px',
})

export const SortContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
})

export const SortLabel = styled(Typography)({ color: 'white', fontFamily: theme.typography.k2d })

export const SortButton = styled(Button)({ color: 'white', fontFamily: theme.typography.k2d })
