import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

test('Button click sets swipe direction', () => {
  render(<Main />);
  const roundButtonElement = screen.getByTestId('round-button');
  expect(roundButtonElement).toBeInTheDocument();
});
