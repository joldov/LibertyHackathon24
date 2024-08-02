import { render, screen } from '@testing-library/react';
import Footer from './Footer';

beforeEach(() => {
  render(<Footer />);
});

describe('The Footer component', () => {
  it('should display the footer content.', () => {
    expect(screen.getByText('Liberty Mutual Insurance Company', { exact: false })).toBeDefined();
  });

  it('should display the horizontal rule.', () => {
    expect(screen.getByRole('separator')).toBeDefined();
  });
});
