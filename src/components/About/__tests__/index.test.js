import React from 'react';
// Import the React Testing Library
import{ render, cleanup }from'@testing-library/react';
// Import the jest-dom Package
import'@testing-library/jest-dom/extend-expect';
// Import About component
import About from'..';

// Call cleanup function using afterEach global Jest function
// Cleans up any leftover memory data that could give false results
afterEach(cleanup);

// Declare component we are testing
describe('About component', () => {
    // First Test - verify component is rendering
    // it('what is being tested', (callback function) => {})
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        // test+compare expected/outcome values match
        expect(asFragment()).toMatchSnapshot();
    })
})