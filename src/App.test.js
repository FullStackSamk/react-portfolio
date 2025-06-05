import { render, screen } from '@testing-library/react';
import NewsletterSignup from './components/NewsletterSignup';

test('renders newsletter section', () => {
  render(<NewsletterSignup />);
  const heading = screen.getByText(/Join Our Newsletter/i);
  expect(heading).toBeInTheDocument();
});
