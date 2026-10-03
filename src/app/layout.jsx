import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import './globals.css'
import theme from './theme'

export const metadata = {
  title: 'Go Green Ticket | Discover events',
  description: 'Discover movies, concerts, sports and theatre with Go Green Ticket.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
