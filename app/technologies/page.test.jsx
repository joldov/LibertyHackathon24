import { fireEvent, render, screen, within } from '@testing-library/react';
import Technologies from './page';

describe('The Technologies Page', () => {
  beforeEach(() => {
    render(<Technologies />);
  });

  it('should contain 6 default technologies', () => {
    expect(screen.getAllByRole('listitem').length).toEqual(6);
  });

  it('should render an icon and link for each accordion item', () => {
    screen.getAllByRole('listitem').forEach((accordionItem) => {
      fireEvent.click(within(accordionItem).getByRole('button'));

      expect(within(accordionItem).getByRole('link')).toBeDefined();
      expect(within(accordionItem).getByRole('img')).toBeDefined();
    });
  });
});
