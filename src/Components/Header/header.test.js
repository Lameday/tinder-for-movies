import { render, screen } from '@testing-library/react'
import Header from './Header'

test('Should render header', () => {
  render(<Header />)
  const roundButtonElement = screen.getByTestId('header')
  expect(roundButtonElement).toBeInTheDocument()
});
