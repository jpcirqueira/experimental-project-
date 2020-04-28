import { runSaga } from 'redux-saga'
import { getElement } from '../store/modules/element/sagas'
import { getElementSuccess } from '../store/modules/element/actions'

describe('teste saga', () => {
    
    const dispatch = jest.fn()
    
    it('saga deve funcionar sem falhas', async () => {
        
        await runSaga({ dispatch }, getElement).toPromise()

        expect(dispatch).toHaveBeenCalledWith(getElementSuccess(['teste']))
    })
})