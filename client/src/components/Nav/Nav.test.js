import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Nav from './Nav';
import {store} from '../../store/index.js'
import { BrowserRouter } from "react-router-dom";


describe('<Nav />', ()=>{
    it('renderiza un button', () => {
        render(<Provider store={store}><BrowserRouter><Nav/></BrowserRouter></Provider>)
        const text = screen.getByText('Crear Pokemon');
        expect(text).toBeInTheDocument();
    })
    
    
})