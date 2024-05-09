import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from '../component/Nav';

describe('Nav component', () => {
    test('it should update searchTerm state on input change', () => {
        const { getByPlaceholderText } = render(<Nav />);
      
        const searchInput = getByPlaceholderText('Search');
      
        fireEvent.change(searchInput, { target: { value: 'Rs' } });
      
        expect(searchInput.value).toBe('Rs');
      });
});