import { Box, Button, styled } from '@mui/material'
import { LandPlot, Clock, CalendarDays, CircleChevronRight } from 'lucide-react'

import { featuredMovie } from './data'

export const BackgroundImage = styled(Box)(() => ({
  position: 'relative',
  paddingBottom: 32,
  width: '100%',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: `url(${featuredMovie.poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    pointerEvents: 'none',
  },
}))

export const MainMenuBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: 'clamp(8px, 5vw, 80px)',
  padding: '2% 0',
  width: '100%',
  minHeight: 80,
  flexWrap: 'wrap',

  '@media (max-width: 1439px)': {
    gap: 'clamp(8px, 4vw, 60px)',
  },
})

export const MainMenuStyles = styled(Button, {
  shouldForwardProp: (prop) => !['isHovered', 'isClicked'].includes(prop),
})(({ isHovered, isClicked, theme }) => ({
  color: 'white',
  cursor: 'pointer',
  border: isClicked
    ? `1.5px solid ${theme.palette.color.green}`
    : isHovered
      ? `1.5px solid ${theme.palette.color.green}`
      : '1.5px solid transparent',
  borderRadius: '5px',
  position: 'relative',
  transition: 'border-color 200ms ease, background-color 200ms ease',
  fontFamily: theme.typography.k2d,
  fontSize: 'clamp(14px, 2.2vw, 24px)',
  '&:hover': { borderColor: theme.palette.color.green, backgroundColor: '#0dbd7915' },
  padding: '0px 15px 0px 15px',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: 5,
    width: 'calc(100% - 20px)',
    height: '3px',
    backgroundColor: theme.palette.color.green,
    transform: isClicked || isHovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
  },
}))

export const LatestMenu = styled(Box)(({ theme }) => ({
  border: `1.5px solid ${theme.palette.color.green}`,
  borderRadius: '10px',
  position: 'relative',
  margin: '0 auto',
  width: 'calc(100% - 32px)',
  maxWidth: 1440,
  padding: 'clamp(20px, 4vw, 64px)',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, .8fr) auto',
  '@media (max-width: 1100px)': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
    '& > :last-child': { justifySelf: 'end' },
  },
  '@media (max-width: 600px)': { gridTemplateColumns: 'minmax(0, 1fr)', gap: 24 },
  alignItems: 'center',
  gap: 32,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
}))

export const LatestMovie = styled(Box)({
  backgroundImage: `url(${featuredMovie.poster})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyItems: 'flex-start',
  aspectRatio: '2 / 3',
  width: '100%',
  filter: 'brightness(0.8)',
})

export const LatestMovieInfo = styled(Box)({
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
})

export const LatestMovietitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.luckiestGuy,
  color: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  textAlign: 'center',
  lineHeight: '1',
  fontSize: 'clamp(48px, 6vw, 88px)',
}))

export const LatestMovieDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  padding: '16px 0',
  fontSize: 'clamp(15px, 1.25vw, 18px)',
  lineHeight: 1.8,
  fontFamily: theme.typography.k2d,
  color: theme.palette.color.green,
}))

export const LatestMovieBuy = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  padding: '10px 30px',
  fontSize: 16,
  fontFamily: theme.typography.k2d,
  color: theme.palette.color.green,
  border: `1.5px solid ${'white'}`,
  borderRadius: '10px',
  gap: theme.spacing(6),
}))

export const NextArrow = styled(CircleChevronRight)(({ theme }) => ({
  color: 'white',
  strokeWidth: '1px',
  cursor: 'pointer',
  transition: 'filter 0.7s ease',
  width: 48,
  height: 48,

  '&:hover': {
    filter: `drop-shadow(0 0 20px ${theme.palette.color.green})`,
  },
}))

export const CalendarIcon = styled(CalendarDays)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const ClockIcon = styled(Clock)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const LocationIcon = styled(LandPlot)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const Booking = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: 'white',
  fontFamily: theme.typography.k2d,
  fontSize: 18,
  minHeight: 48,
  transition: 'background-color 200ms ease, transform 200ms ease',
  '&:hover': { backgroundColor: '#0dbd7925', transform: 'translateY(-2px)' },
  padding: '10px 20px',
  border: `1.5px solid ${theme.palette.color.green}`,
  borderRadius: '5px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  justifyContent: 'center',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '18%',
    left: '50%',
    width: '50%',
    height: '2px',
    backgroundColor: theme.palette.color.green,
    transform: 'translateX(-50%) scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
  },

  '&:hover::after': {
    transform: 'translateX(-50%) scaleX(1)',
  },
}))

export const BrowseLatestButton = (props) => (
  <Booking {...props} sx={{ padding: 1, minWidth: 48, ...props.sx }} />
)
