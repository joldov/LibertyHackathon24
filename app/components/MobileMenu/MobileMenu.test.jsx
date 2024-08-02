import { render, screen } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { NavigationLinks } from '../Header/Header';

beforeEach(() => {
  render(
    <MobileMenu>
      <NavigationLinks />
    </MobileMenu>,
  );
});

describe('The MobileMenu component', () => {
  it('should render appropriately.', () => {
    expect(screen.getAllByRole('link').length).toEqual(2);
    expect(screen.getByText('Home').href.endsWith('/')).toBe(true);
    expect(screen.getByText('Technologies').href.endsWith('/technologies')).toBe(true);
  });
});
