import { styled } from '@mui/system'
import { Box, Button, Typography } from '@mui/material'

import theme from '@/app/theme'

const EventContainer = styled(Box)({
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

const EventTitle = styled(Box)({
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

const SortContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
})

const SortLabel = styled(Typography)({ color: 'white', fontFamily: theme.typography.k2d })

const SortButton = styled(Button)({ color: 'white', fontFamily: theme.typography.k2d })

const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'date', label: 'Date' },
  { value: 'time', label: 'Time' },
  { value: 'place', label: 'Place' },
  { value: 'price', label: 'Price' },
]

const EventModule = ({ title, sortOptions }) => {
  return (
    <EventContainer id={title === 'Concerts' ? 'concert' : title.toLowerCase()}>
      <EventTitle component='h2'>{title}</EventTitle>
      <SortContainer>
        <SortLabel>Sort by:</SortLabel>
        {sortOptions.map((option) => (
          <SortButton key={option.value} disabled title='Sorting requires event details'>
            {option.label}
          </SortButton>
        ))}
      </SortContainer>
    </EventContainer>
  )
}

const MoviesModule = () => <EventModule title='Movies' sortOptions={sortOptions} />
const ConcertsModule = () => <EventModule title='Concerts' sortOptions={sortOptions} />
const SportsModule = () => <EventModule title='Sports' sortOptions={sortOptions} />
const TheatreModule = () => <EventModule title='Theatre' sortOptions={sortOptions} />

export { MoviesModule, ConcertsModule, SportsModule, TheatreModule }
