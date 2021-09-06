import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


// handle props for the Nav
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// cleanup leftover memory data - Jest function
afterEach(cleanup);

describe('Nav component', () => {
    // baseline test to see it render
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    })

    //snapshot test
    it('matches snapshot', () => {
        // render Nav
        const { asFragment } = render(
            <Nav
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
        
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(
            <Nav
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})  


describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(
            <Nav
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );
        // two expects means both must render true to pass the entire test
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})