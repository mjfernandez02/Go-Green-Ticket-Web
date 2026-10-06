import {
  EventContainer,
  EventTitle,
  SortContainer,
  SortLabel,
  SortButton,
} from './movieModule.styles'
import { sortOptions } from './data'

const EventModule = ({ title, sortOptions }) => {
  return (
    <EventContainer id={title === 'Concerts' ? 'concert' : title.toLowerCase()}>
      <EventTitle component='h2'>{title}</EventTitle>
      <SortContainer>
        <SortLabel>Sort by:</SortLabel>
        {sortOptions.map((option) => (
          <SortButton key={option.value} disabled title='Sorting requires event details'>
            {option.label}
          </SortButton>
        ))}
      </SortContainer>
    </EventContainer>
  )
}

const MoviesModule = () => <EventModule title='Movies' sortOptions={sortOptions} />
const ConcertsModule = () => <EventModule title='Concerts' sortOptions={sortOptions} />
const SportsModule = () => <EventModule title='Sports' sortOptions={sortOptions} />
const TheatreModule = () => <EventModule title='Theatre' sortOptions={sortOptions} />

export { MoviesModule, ConcertsModule, SportsModule, TheatreModule }
