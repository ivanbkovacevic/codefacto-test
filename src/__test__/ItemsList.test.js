import React from 'react';
import { render } from '@testing-library/react';
import ItemsList from '../components/ItemsList';


it('Items list renders correctly',()=>{
    const {queryByTestId}= render(<ItemsList/>);

    expect(queryByTestId('items-list')).toBeTruthy();
}) 