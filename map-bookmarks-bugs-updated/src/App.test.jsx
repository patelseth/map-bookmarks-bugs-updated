import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const el = screen.getByText(/Welcome to Map Bookmarks/i);
  expect(el).toBeInTheDocument();
});
