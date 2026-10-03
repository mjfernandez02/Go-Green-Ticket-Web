'use client'

import { Box } from '@mui/material'

import { MoviesModule, ConcertsModule, SportsModule, TheatreModule } from './movieModule.jsx'
import MoviesCarousel from './MoviesCarousel.jsx'

const movies = [
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
  { title: 'Movie 6' },
  { title: 'Movie 7' },
  { title: 'Movie 8' },
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
  { title: 'Movie 6' },
  { title: 'Movie 7' },
  { title: 'Movie 8' },
]

const concerts = [
  { title: 'Concert 1' },
  { title: 'Concert 2' },
  { title: 'Concert 3' },
  { title: 'Concert 4' },
  { title: 'Concert 5' },
  { title: 'Concert 6' },
  { title: 'Concert 7' },
  { title: 'Concert 8' },
  { title: 'Concert 1' },
  { title: 'Concert 2' },
  { title: 'Concert 3' },
  { title: 'Concert 4' },
  { title: 'Concert 5' },
  { title: 'Concert 6' },
  { title: 'Concert 7' },
  { title: 'Concert 8' },
]

const sports = [
  { title: 'Sport 1' },
  { title: 'Sport 2' },
  { title: 'Sport 3' },
  { title: 'Sport 4' },
  { title: 'Sport 5' },
  { title: 'Sport 6' },
  { title: 'Sport 7' },
  { title: 'Sport 8' },
  { title: 'Sport 1' },
  { title: 'Sport 2' },
  { title: 'Sport 3' },
  { title: 'Sport 4' },
  { title: 'Sport 5' },
  { title: 'Sport 6' },
  { title: 'Sport 7' },
  { title: 'Sport 8' },
]

const theatre = [
  { title: 'Theatre 1' },
  { title: 'Theatre 2' },
  { title: 'Theatre 3' },
  { title: 'Theatre 4' },
  { title: 'Theatre 5' },
  { title: 'Theatre 6' },
  { title: 'Theatre 7' },
  { title: 'Theatre 8' },
  { title: 'Theatre 1' },
  { title: 'Theatre 2' },
  { title: 'Theatre 3' },
  { title: 'Theatre 4' },
  { title: 'Theatre 5' },
  { title: 'Theatre 6' },
  { title: 'Theatre 7' },
  { title: 'Theatre 8' },
]

const MoviesPage = ({ query = '' }) => {
  const filter = (events) =>
    events.filter((event) => event.title.toLowerCase().includes(query.trim().toLowerCase()))
  return (
    <Box id='latest' component='section' aria-label='Latest events'>
      <MoviesModule />
      <MoviesCarousel genre={filter(movies)} />
      <ConcertsModule />
      <MoviesCarousel genre={filter(concerts)} />
      <SportsModule />
      <MoviesCarousel genre={filter(sports)} />
      <TheatreModule />
      <MoviesCarousel genre={filter(theatre)} />
    </Box>
  )
}

export default MoviesPage
