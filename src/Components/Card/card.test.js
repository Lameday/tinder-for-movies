import { render, screen } from '@testing-library/react';
import Card from './Card';
const movie = {
  id: '1and3011',
  imageURL:
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  title: 'Inferno',
  summary: 'Lorem ipsum….',
  rating: 5.3,
};

test('Should render card', () => {
  render(<Card movie={movie} />)
  const cardElement = screen.getByTestId('card-1and3011')
  expect(cardElement).toBeInTheDocument()
});

test('Card should display summary', () => {
  render(<Card movie={movie} />)
  const cardText = screen.getByTestId('card-1and3011-text')
  expect(cardText.textContent).toBe('Lorem ipsum….')
});

test('Card should display title', () => {
  render(<Card movie={movie} />)
  const cardText = screen.getByTestId('card-1and3011-title')
  expect(cardText.textContent).toBe('Inferno - 5.3/10')
});

test('Card image must have src and alt "bg-pic"', () => {
  render(<Card movie={movie} />)
  const cardText = screen.getByTestId('card-1and3011-image')
  expect(cardText).toHaveAttribute('src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' )
  expect(cardText).toHaveAttribute('alt', 'bg-pic')
});