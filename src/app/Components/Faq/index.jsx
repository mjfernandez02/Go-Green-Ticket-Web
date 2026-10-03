'use client'
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material'
import { ChevronDown } from 'lucide-react'
const questions = [
  [
    'What can I discover here?',
    'Explore movies, concerts, sports and theatre using the event categories.',
  ],
  [
    'How do I browse more events?',
    'Swipe the event rows or use the arrow buttons to browse more events.',
  ],
  [
    'Can I book tickets yet?',
    'This site is a preview. Payment and booking confirmations are not connected yet.',
  ],
]
export default function Faq() {
  return (
    <Box
      component='footer'
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1.3fr' },
        gap: 12,
        p: 'clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #ffffff15',
      }}
    >
      <Box id='about'>
        <Typography component='h2' sx={{ fontSize: 28, color: '#0dbd79', mb: 6 }}>
          About Go Green Ticket
        </Typography>
        <Typography sx={{ lineHeight: 1.8, color: '#ccc' }}>
          Find your next experience. Explore movies, live music, sporting events and theatre in one
          place.
        </Typography>
      </Box>
      <Box id='help' sx={{ minWidth: 0 }}>
        <Typography component='h2' sx={{ fontSize: 28, mb: 6 }}>
          Frequently asked questions
        </Typography>
        {questions.map(([question, answer], index) => (
          <Accordion
            key={question}
            disableGutters
            sx={{
              bgcolor: '#242424',
              color: 'white',
              boxShadow: 'none',
              borderBottom: '1px solid #ffffff20',
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown color='#0dbd79' />}
              id={`faq-${index}`}
              aria-controls={`faq-answer-${index}`}
              sx={{ minHeight: 60 }}
            >
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-answer-${index}`}>
              <Typography sx={{ color: '#ccc', lineHeight: 1.7 }}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}
