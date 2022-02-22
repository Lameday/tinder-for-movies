import { render, screen, cleanup } from '@testing-library/react';
import RoundButton from './RoundButton';

test('Should render button', () => {
  render(<RoundButton />);
  const roundButtonElement = screen.getByTestId('round-button');
  expect(roundButtonElement).toBeInTheDocument();
});

//  basic test for github actions
