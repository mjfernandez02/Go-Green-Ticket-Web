'use client'

import { Roboto, Luckiest_Guy, Inter, K2D } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
})

const k2d = K2D({
  weight: '500',
  style: 'normal',
  subsets: ['latin'],
})

const theme = createTheme({
  spacing: 3,
  typography: {
    fontFamily: inter.style.fontFamily,
    roboto: roboto.style.fontFamily,
    inter: inter.style.fontFamily,
    luckiestGuy: luckiestGuy.style.fontFamily,
    k2d: k2d.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: { main: '#0DBD79' },
    color: {
      green: '#0DBD79',
      black: '#141414',
      grey: '#242424',
    },
  },
})

export default theme
