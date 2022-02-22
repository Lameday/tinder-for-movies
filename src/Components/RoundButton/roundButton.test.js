import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import RoundButton from './RoundButton'

test('Should render button', () => {
  render(<RoundButton  
    iconColor="#ff006f"
    deleteFirstMovie={() => console.log('test')}
    setSwipeDirection={() => console.log('test2')}
    ><div>as</div></RoundButton>
    )
  const roundButtonElement = screen.getByTestId('round-button')
  expect(roundButtonElement).toBeInTheDocument()
})


