'use client'
import { useState } from 'react'

import {
  BackgroundImage,
  MainMenuBox,
  MainMenuStyles,
  LatestMenu,
  LatestMovie,
  LatestMovieInfo,
  LatestMovietitle,
  LatestMovieDescription,
  LatestMovieBuy,
  NextArrow,
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  Booking,
  BrowseLatestButton,
} from './styles'
import { MAIN_MENU_ITEMS, featuredMovie } from './data'

const MainPage = () => {
  const [isHovered, setIsHovered] = useState(null)
  const [isClicked, setIsClicked] = useState('Movies')

  const handleMouseEnter = (text) => {
    if (text !== isClicked) {
      setIsHovered(text)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  const handleClick = (text) => () => {
    setIsClicked(text)
  }

  return (
    <BackgroundImage id='home' component='section' aria-label='Featured event'>
      <MainMenuBox component='nav' aria-label='Event categories'>
        {MAIN_MENU_ITEMS.map(({ text }) => (
          <MainMenuStyles
            key={text}
            isHovered={isHovered === text}
            isClicked={isClicked === text}
            onMouseEnter={() => handleMouseEnter(text)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick(text)}
            component='a'
            href={text === 'Others' ? '#latest' : `#${text.toLowerCase()}`}
            aria-current={isClicked === text ? 'true' : undefined}
          >
            {text}
          </MainMenuStyles>
        ))}
      </MainMenuBox>

      <LatestMenu>
        <LatestMovie role='img' aria-label={`${featuredMovie.title} poster`} />
        <LatestMovieInfo>
          <LatestMovietitle component='h1'>
            {featuredMovie.titleLines[0]}
            <br /> {featuredMovie.titleLines[1]}
          </LatestMovietitle>
          <LatestMovieDescription>{featuredMovie.description}</LatestMovieDescription>
        </LatestMovieInfo>
        <LatestMovieBuy>
          <>
            <CalendarIcon size={50} />
            <ClockIcon size={50} />
            <LocationIcon size={50} />
          </>
          <Booking component='a' href='#movies'>
            Explore movies
          </Booking>
        </LatestMovieBuy>
        <BrowseLatestButton component='a' href='#latest' aria-label='Browse latest events'>
          <NextArrow aria-hidden='true' />
        </BrowseLatestButton>
      </LatestMenu>
    </BackgroundImage>
  )
}

export default MainPage
