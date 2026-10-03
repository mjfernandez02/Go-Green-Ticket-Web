import Image from 'next/image'

import GoGreenTicket from '../../assets/GoGreenTicket.png'

export const GoGreenTicketLogo = ({ width = 170, height = 80 }) => (
  <Image
    src={GoGreenTicket}
    alt='Go Green Ticket'
    width={width}
    height={height}
    priority
    style={{ objectFit: 'contain' }}
  />
)
