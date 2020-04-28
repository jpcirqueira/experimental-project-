export function addelement(element) {
return {
    type: 'ADD_ELEMENT',
    payload: {element}
    }

}

export function getElementSuccess(data) {
    return {
        type: 'ADD_ELEMENT_SUCCESS',
        payload: { data }
    }
}

export function getElementFailure() {
    return {
        type: 'ADD_ELEMENT_FAILURE',

    }
}

