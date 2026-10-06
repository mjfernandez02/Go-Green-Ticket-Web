import { Box, styled, Typography } from '@mui/material'

/** Styled Components */

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.color.black,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '8px clamp(16px, 4vw, 64px)',
  flexWrap: 'wrap',
  height: 'auto',
  minHeight: 40,
  '@media (max-width: 600px)': { justifyContent: 'center' },
}))

export const GreenText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(12px, 2vw, 18px)',
  fontFamily: theme.typography.luckiestGuy,
  color: theme.palette.color.green,
}))

export const WhiteText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(12px, 2vw, 18px)',
  fontFamily: theme.typography.luckiestGuy,
  color: 'white',
}))
