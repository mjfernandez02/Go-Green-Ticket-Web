'use client'

import { InputAdornment } from '@mui/material'

import { SearchBarContainer, StyledInputBase, SearchIcon } from './SearchBar.styles'

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <SearchBarContainer>
      <StyledInputBase
        placeholder='Search'
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        inputProps={{ 'aria-label': 'Search events' }}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon size={24} />
          </InputAdornment>
        }
      />
    </SearchBarContainer>
  )
}

export default SearchBar
