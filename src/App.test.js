import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const subtitleElement = screen.getByText(/школа хоккейной подготовки/i);
  expect(subtitleElement).toBeInTheDocument();
});
