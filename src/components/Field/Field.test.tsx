import React from 'react';
import {Field} from 'components/Field';
import {renderWithProviders} from 'helpers';

const props = {
    label: 'Label',
};

describe('Field', () => {
    it('renders without crashing', () => {
        const {getByTestId} = renderWithProviders(<Field {...props} />);

        expect(getByTestId('field-container')).toBeInTheDocument();
    });

    it('renders label text', () => {
        const {getByText} = renderWithProviders(<Field {...props} />);

        expect(getByText(props.label).textContent).toBe(props.label);
    });
});
