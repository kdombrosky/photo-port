import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);


const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal />);
    })
        // snapshot test
    it('matches snapshot', () => {
        // render Nav
        const { asFragment } = render(<Modal/>);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

