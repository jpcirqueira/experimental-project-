import reducer, { INITAL_STATE } from '../store/modules/element/reducer'
import { addelement } from '../store/modules/element/actions'


describe('teste reducer', () => {
    it('ADD_ELEMENT', () => {
        const state = reducer(INITAL_STATE, addelement('teste'))
        expect(state).toStrictEqual(['teste'])
    })
})