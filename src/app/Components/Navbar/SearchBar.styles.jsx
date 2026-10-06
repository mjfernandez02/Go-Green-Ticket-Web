import { Box, InputBase, styled } from '@mui/material'
import { FiSearch } from 'react-icons/fi'

export const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: '260px',
  height: '46px',
  minWidth: 0,
  position: 'relative',
  padding: '8px 16px 8px 12px',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.color.green}`,
  backgroundColor: theme.palette.color.black,
  display: 'flex',
  alignItems: 'center',
  marginLeft: '12px',
  transition: 'box-shadow 200ms ease, border-color 200ms ease',
  '&:focus-within': { boxShadow: '0 0 0 3px #0dbd7930' },
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  flexGrow: 1,
  '& input::placeholder': {
    color: 'white',
    opacity: 0.7,
    fontWeight: '350',
    fontFamily: theme.typography.inter,
  },
}))

export const SearchIcon = styled(FiSearch)({ color: 'white' })
