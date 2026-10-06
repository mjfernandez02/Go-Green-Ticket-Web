import { IconButton } from '@mui/material'
import { useRef } from 'react'
import { CalendarDays, HandCoins, LandPlot } from 'lucide-react'

import {
  CarouselRoot,
  EmptyState,
  CarouselContainer,
  MoviesWrapper,
  MovieBox,
  MoviePicture,
  MovieTitle,
  MovieDetailsTop,
  MovieDetailsBottom,
  ArrowContainer,
  NextArrowContainer,
  PrevArrowContainer,
  NextArrow,
  PrevArrow,
  Calendar,
  Price,
  Location,
  Booking,
} from './CarouselStyles'

const MoviesCarousel = ({ genre }) => {
  const wrapperRef = useRef(null)
  const getStep = () =>
    wrapperRef.current?.firstElementChild?.getBoundingClientRect().width + 20 || 300
  const getBehavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

  const handleNext = () => {
    if (wrapperRef.current) {
      const maxScrollLeft = wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth
      const newScrollLeft = Math.min(wrapperRef.current.scrollLeft + getStep(), maxScrollLeft)
      wrapperRef.current.scrollTo({ left: newScrollLeft, behavior: getBehavior() })
    }
  }

  const handlePrev = () => {
    if (wrapperRef.current) {
      const newScrollLeft = Math.max(wrapperRef.current.scrollLeft - getStep(), 0)
      wrapperRef.current.scrollTo({ left: newScrollLeft, behavior: getBehavior() })
    }
  }

  return (
    <CarouselRoot>
      <CarouselContainer>
        <MoviesWrapper
          ref={wrapperRef}
          tabIndex={0}
          role='region'
          aria-label='Event carousel'
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              handleNext()
            }
            if (event.key === 'ArrowLeft') {
              event.preventDefault()
              handlePrev()
            }
          }}
        >
          {genre.length === 0 && (
            <EmptyState role='status'>No events match your search.</EmptyState>
          )}
          {genre.map((movie, index) => (
            <MovieBox key={index}>
              <MoviePicture aria-hidden='true'>GGT</MoviePicture>
              <MovieTitle component='h3'>{movie.title}</MovieTitle>
              <MovieDetailsTop>
                <Location>
                  <LandPlot size={30} />
                </Location>
                <Calendar>
                  <CalendarDays size={30} />
                </Calendar>
              </MovieDetailsTop>
              <MovieDetailsBottom>
                <Price>
                  <HandCoins size={30} />
                </Price>
                <Booking disabled title='Booking is not available in this preview'>
                  Coming soon
                </Booking>
              </MovieDetailsBottom>
            </MovieBox>
          ))}
        </MoviesWrapper>
        <ArrowContainer>
          <PrevArrowContainer>
            <IconButton aria-label='Previous events' onClick={handlePrev}>
              <PrevArrow aria-hidden='true' />
            </IconButton>
          </PrevArrowContainer>
          <NextArrowContainer>
            <IconButton aria-label='Next events' onClick={handleNext}>
              <NextArrow aria-hidden='true' />
            </IconButton>
          </NextArrowContainer>
        </ArrowContainer>
      </CarouselContainer>
    </CarouselRoot>
  )
}

export default MoviesCarousel
