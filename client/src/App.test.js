import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/EXPLORE YOUR NEXT MOVIES AND TV SHOWS/i);
  expect(linkElement).toBeInTheDocument();
});
