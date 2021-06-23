import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';


it('Navbar renders correctly',()=>{
    const {queryByTestId}= render(<Navbar/>);

    expect(queryByTestId('navbar')).toBeTruthy();
})