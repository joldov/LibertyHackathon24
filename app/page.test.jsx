import { screen, render } from '@testing-library/react';
import Home from './page';

describe('The Home Page', () => {
  beforeEach(() => {
    render(
      <Home />,
    );
  });

  it('should display introductory text.', () => {
    expect(
      screen.getByText('This NextJS Pattern includes many different tools and technologies', {
        exact: false,
      }),
    ).toBeDefined();
  });

  it('should display the Architecture Enablement Logo', () => {
    expect(screen.getByAltText('Architecture Enablement Logo')).toBeDefined();
  });

  it('should display the NextJS Logo', () => {
    expect(screen.getByAltText('NextJS Logo')).toBeDefined();
  });

  it('should display a button which directs users to the technology page once clicked.', async () => {
    const link = await screen.findByTestId('technologies-link');
    const button = await screen.findByTestId('technologies-button');

    expect(link).toBeDefined();
    expect(button).toBeDefined();
    expect(link.contains(button)).toBeTruthy();
    expect(link.href).toEqual('http://localhost/technologies');
  });
});
