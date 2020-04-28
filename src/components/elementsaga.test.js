import { runSaga } from 'redux-saga'
import { getElement } from '../store/modules/element/sagas'
import { getElementSuccess, getElementFailure } from '../store/modules/element/actions'
import MockAdapter from 'axios-mock-adapter'
import api from '../service/api'

const apiMock = new MockAdapter(api)

describe('teste saga', () => {
    
    const dispatch = jest.fn()
    
    it('saga deve funcionar sem falhas', async () => {
        
        apiMock.onGet('element').reply(200, ['teste'])
        await runSaga({ dispatch }, getElement).toPromise()

        expect(dispatch).toHaveBeenCalledWith(getElementSuccess(['teste']))
    })

    it('saga deve disparar error', async () => {
        
        apiMock.onGet('element').reply(500)
        await runSaga({ dispatch }, getElement).toPromise()
        expect(dispatch).toHaveBeenCalledWith(getElementFailure())
    })
})