import { act, fireEvent, render, screen } from '@testing-library/react';
import Header, { NavigationLinks } from './Header';

const triggerMobileBreakpoint = () => {
  act(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 900,
    });

    window.dispatchEvent(new Event('resize'));
  });

  expect(window.innerWidth).toBe(900);
};

describe('The Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should contain the Liberty Mutual logo.', () => {
    expect(screen.getByLabelText('Liberty Mutual Insurance logo')).toBeDefined();
  });

  it('should contain the correct links.', () => {
    expect(screen.getAllByRole('link').length).toEqual(2);
    expect(screen.getByText('Home').href.endsWith('/')).toBe(true);
    expect(screen.getByText('Technologies').href.endsWith('/technologies')).toBe(true);
  });

  it('should render the mobile menu when the menu button is clicked.', () => {
    triggerMobileBreakpoint();

    fireEvent.click(screen.getByRole('button', { type: 'toggle' }));
    expect(screen.getByTestId('mobile-menu')).toBeDefined();
  });
});

describe('Navigation Links', () => {
  const handleClick = jest.fn();

  it('should close the mobile menu on activation.', async () => {
    await render(<NavigationLinks setOverlayOpen={handleClick} />);
    const links = await screen.findAllByRole('link');
    const numberOfLinks = links.length;

    links.forEach((link) => fireEvent.click(link));
    expect(handleClick).toHaveBeenCalledTimes(numberOfLinks);
  });
});
