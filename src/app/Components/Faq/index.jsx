'use client'
import { AccordionDetails, Box, Typography } from '@mui/material'

import { questions } from './data'
import {
  FooterContainer,
  AboutTitle,
  AboutDescription,
  HelpContainer,
  SectionTitle,
  QuestionAccordion,
  QuestionSummary,
  AnswerText,
  ExpandIcon,
} from './styles'

export default function Faq() {
  return (
    <FooterContainer component='footer'>
      <Box id='about'>
        <AboutTitle component='h2'>About Go Green Ticket</AboutTitle>
        <AboutDescription>
          Find your next experience. Explore movies, live music, sporting events and theatre in one
          place.
        </AboutDescription>
      </Box>
      <HelpContainer id='help'>
        <SectionTitle component='h2'>Frequently asked questions</SectionTitle>
        {questions.map(([question, answer], index) => (
          <QuestionAccordion key={question} disableGutters>
            <QuestionSummary
              expandIcon={<ExpandIcon />}
              id={`faq-${index}`}
              aria-controls={`faq-answer-${index}`}
            >
              <Typography>{question}</Typography>
            </QuestionSummary>
            <AccordionDetails id={`faq-answer-${index}`}>
              <AnswerText>{answer}</AnswerText>
            </AccordionDetails>
          </QuestionAccordion>
        ))}
      </HelpContainer>
    </FooterContainer>
  )
}
