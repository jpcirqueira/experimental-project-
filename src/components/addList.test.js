 import React from 'react';
 import { render, fireEvent, cleanup } from '@testing-library/react'; 
 import '@testing-library/jest-dom/extend-expect';

 import AddList from './addList';

 describe('addList', () => {

     //limpa o localstorage para começar os testes.
     beforeEach(() => {
         localStorage.clear()
     })

     it('adicionar algo a lista', () => {
         const { getByText, getByTestId, debug, getByLabelText }=render(<AddList />)

         fireEvent.change(getByLabelText('elements'), { target: { value: 'teste' }} )
         fireEvent.submit(getByTestId('list'))

         //debug()
         expect(getByTestId('list')).toContainElement(getByText('teste'));
         expect(getByLabelText('elements')).toHaveValue('')
     })

     it('testando storage', () => {
        let { getByText, getByTestId, getByLabelText }=render(<AddList />)

        fireEvent.change(getByLabelText('elements'), { target: { value: 'teste' }} )
        fireEvent.submit(getByTestId('list'))

        // limpa a dom
        cleanup();

        ({ getByText, getByTestId, getByLabelText }=render(<AddList />))

        // ver se o localstorage foi chamado
        //expect(localStorage.setItem).toHaveBeenCalledWith('element', JSON.stringify(['teste']))
        expect(getByTestId('list')).toContainElement(getByText('teste'));
    })
 })