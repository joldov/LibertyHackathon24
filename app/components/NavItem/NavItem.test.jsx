// import { render, screen } from '@testing-library/react';
// import NavItem from './NavItem';

// describe('The NavItem component', () => {
//   const setOverlayOpen = jest.fn();

//   it('should have a class of "active" if the pathname is the same as the href', () => {
//     render(
//       <NavItem
//         key="Home"
//         href={'/'}
//         pathname={'/'}
//         setOverlayOpen={setOverlayOpen}
//         text={'Home'}
//       />,
//     );

//     expect(screen.getByText('Home').classList).toContain('active');
//   });

//   it('should not have a class of "active" if the pathname is different than the href', () => {
//     render(
//       <NavItem
//         key="Home"
//         href={'/'}
//         pathname={'/technologies'}
//         setOverlayOpen={setOverlayOpen}
//         text={'Home'}
//       />,
//     );

//     expect(screen.getByText('Home').classList).not.toContain('active');
//   });
// });
