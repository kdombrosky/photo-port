import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// release memory allocation between tests
afterEach(cleanup);

describe('Contact component', () => {
    // baseline test to see it render
    it('renders', () => {
        render(<Contact/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        // render Nav
        const { asFragment } = render(<Contact/>);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('h1 text', () => {
    it('inserts text into h1', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1')).toHaveTextContent('Contact me')
    })
})
describe('button text', () => {
    it('inserts text into button', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})

