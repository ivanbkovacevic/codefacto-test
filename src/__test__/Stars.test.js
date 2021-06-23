import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Stars from '../components/Stars';


it('Stars renders correctly',()=>{
    const {queryAllByTitle}= render(<Stars />);

    expect(queryAllByTitle('stars-btn')).toBeTruthy();
})

describe('Stars clicked nad disaibled',()=>{
    const {queryAllByTitle}= render(<Stars />);
    const starsBtn=queryAllByTitle('star-btn');
    
    expect(starsBtn[4]).not.toBeDisabled();
    fireEvent.click(starsBtn[4]);
    expect(starsBtn[4]).toBeDisabled();
})