import React from 'react';
import { render, fireEvent, getAllByLabelText } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux'

import PostList from './postList'

import {addelement} from '../store/modules/element/actions';
jest.mock('react-redux')


describe('addList', () => {

    
    it('Lista deve renderizar com os dados armazenados no redux', () => {
       useSelector.mockImplementation( m => m({
            element: ['teste']
       }));

       const { getByText, getByTestId } = render(<PostList />)

       expect(getByTestId('list')).toContainElement(getByText('teste'))
    })

    it('Deve adicionar novos elementos a lista', () => {
        const dispatch = jest.fn()
        const { getByTestId , getByLabelText } = render(<PostList />)

        useDispatch.mockReturnValue(dispatch)

        fireEvent.change(getByLabelText('elements'), {target: { value: 'teste'}})
        fireEvent.submit(getByTestId('list'))

        expect(dispatch).toHaveBeenCalledWith(addelement('teste'))

        //console.log(dispatch.mock.calls)
    })
})