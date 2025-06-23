import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header subtitle', () => {
  render(<App />);
  const subtitle = screen.getByText(/ШКОЛА ХОККЕЙНОЙ ПОДГОТОВКИ/i);
  expect(subtitle).toBeInTheDocument();
});
