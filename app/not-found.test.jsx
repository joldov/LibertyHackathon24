import { screen, render } from '@testing-library/react';
import NotFound from './not-found';

describe('The 404 Page', () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it('should contain an image', () => {
    expect(screen.getByAltText('Page Not Found')).toBeDefined();
  });

  it('should contain not found heading', () => {
    expect(screen.getByRole('heading')).toBeDefined();
  });

  it('should display a button which directs to the home page when clicked', async () => {
    const link = await screen.findByTestId('home-link');
    const button = await screen.findByTestId('home-button');

    expect(link).toBeDefined();
    expect(button).toBeDefined();
    expect(link.contains(button)).toBeTruthy();
    expect(link.href).toEqual('http://localhost/');
  });
});
