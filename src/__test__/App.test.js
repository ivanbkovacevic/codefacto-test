import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import App from '../App';


it('App renders correctly',()=>{
    const {queryByTestId}= render(<App/>);

    expect(queryByTestId('app')).toBeTruthy();
})