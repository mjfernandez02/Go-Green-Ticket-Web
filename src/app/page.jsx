'use client'

import { Box, styled } from '@mui/material'
import { useState } from 'react'

import { TopHeader, Navbar, MainPage, MoviesPage, Faq } from '@/app/Components'

const StyledPage = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.color.black,
}))

export default function Home() {
  const [query, setQuery] = useState('')
  return (
    <StyledPage>
      <TopHeader />
      <Navbar query={query} onQueryChange={setQuery} />
      <MainPage />
      <MoviesPage query={query} />
      <Faq />
    </StyledPage>
  )
}
