'use client'

import { useState } from 'react'

import { TopHeader, Navbar, MainPage, MoviesPage, Faq } from '@/app/Components'
import { StyledPage } from './page.styles'

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
