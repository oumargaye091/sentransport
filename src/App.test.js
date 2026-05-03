import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const textElement = screen.getByText(/Bienvenue ! Cette application vous aide à trouver/i);
  expect(textElement).toBeInTheDocument();
});
