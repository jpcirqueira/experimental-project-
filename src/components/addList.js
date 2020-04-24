import React, { useState, useEffect } from 'react';

export default function AddList() {
    const [element, setElement] = useState([]);
    const [ newElement, setNewElement] = useState([]);

    useEffect(() => {
        const element = localStorage.getItem('element')

        if(element) {
            setElement(JSON.parse(element))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('element', JSON.stringify(element))
    }, [element])

    function handleAddElement() {
        setElement([ ... element, newElement])
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