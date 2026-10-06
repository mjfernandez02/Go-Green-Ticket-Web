import { Accordion, AccordionSummary, Box, Typography } from '@mui/material'
import { ChevronDown } from 'lucide-react'

export const FooterContainer = (props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1.3fr' },
      gap: 12,
      p: 'clamp(24px, 5vw, 80px)',
      borderTop: '1px solid #ffffff15',
      ...props.sx,
    }}
  />
)

export const SectionTitle = (props) => (
  <Typography {...props} sx={{ fontSize: 28, mb: 6, ...props.sx }} />
)

export const AboutTitle = (props) => (
  <SectionTitle {...props} sx={{ color: '#0dbd79', ...props.sx }} />
)

export const AboutDescription = (props) => (
  <Typography {...props} sx={{ lineHeight: 1.8, color: '#ccc', ...props.sx }} />
)

export const HelpContainer = (props) => <Box {...props} sx={{ minWidth: 0, ...props.sx }} />

export const QuestionAccordion = (props) => (
  <Accordion
    {...props}
    sx={{
      bgcolor: '#242424',
      color: 'white',
      boxShadow: 'none',
      borderBottom: '1px solid #ffffff20',
      ...props.sx,
    }}
  />
)

export const QuestionSummary = (props) => (
  <AccordionSummary {...props} sx={{ minHeight: 60, ...props.sx }} />
)

export const AnswerText = (props) => (
  <Typography {...props} sx={{ color: '#ccc', lineHeight: 1.7, ...props.sx }} />
)

export const ExpandIcon = (props) => <ChevronDown color='#0dbd79' {...props} />
