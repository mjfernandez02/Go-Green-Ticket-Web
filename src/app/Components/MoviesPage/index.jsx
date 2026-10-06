'use client'

import { Box } from '@mui/material'

import { MoviesModule, ConcertsModule, SportsModule, TheatreModule } from './movieModule.jsx'
import MoviesCarousel from './MoviesCarousel.jsx'
import { movies, concerts, sports, theatre } from './data'

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
