import { render, screen } from '@testing-library/react';
import RoundButton from './RoundButton';

test('Should render button', () => {
  render(<RoundButton />);
  const roundButtonElement = screen.getByTestId('round-button');
  expect(roundButtonElement).toBeInTheDocument();
});