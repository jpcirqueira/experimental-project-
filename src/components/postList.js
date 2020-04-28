import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {addelement} from '../store/modules/element/actions';

export default function PostList() {

    const [ newElement, setNewElement] = useState([]);
 
    const element = useSelector(state => state.element);
    const dispatch = useDispatch()

    function handleAddElement() {
        dispatch(addelement(newElement))
        setNewElement('')
    }

    return(
        <form data-testid="list" onSubmit={handleAddElement}> 
            <ul>
                {element.map(e => <li key={element}>{element}</li>)}
            </ul>
            <label type="text" htmlFor="list">elements</label>
            <input id="list" value={newElement} onChange={e => setNewElement(e.target.value)}/>
            <button onClick={handleAddElement}>
                adicionar
            </button>
        </form>
    );
}