import { screen, render } from '@testing-library/react';
import RootLayout from './layout';

describe('The Root Layout', () => {
  // Mute the validateDOMNesting(...): <html> cannot appear as a child of <div>.
  jest.spyOn(global.console, 'error').mockImplementation((message) => {
    if (!message.includes('validateDOMNesting')) {
      global.console.error(message);
    }
  });

  beforeEach(() => {
    render(<RootLayout />);
  });

  it('should contain the header component.', () => {
    expect(screen.findByTestId('floating-header')).toBeDefined();
  });

  it('should display the footer component.', () => {
    expect(screen.findByTestId('footer')).toBeDefined();
  });
});
