import React from 'react';
import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux'

import PostList from './postList'
jest.mock('react-redux')


describe('addList', () => {

    
    it('Lista deve renderizar com os dados armazenados no redux', () => {
       useSelector.mockImplementation( m => m({
            element: ['teste']
       }));

       const { getByText, getByTestId } = render(<PostList />)

       expect(getByTestId('list')).toContainElement(getByText('teste'))
    })

})