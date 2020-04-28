import { call, put } from 'redux-saga/effects'
import api from '../../../service/api'

import {getElementFailure, getElementSuccess} from './actions'

export function*  getElement(element) {
   try {
       const response = yield call(api.get, 'element')

       yield put(getElementSuccess(response.data))
   } catch (err) {
       yield put(getElementFailure())
   }
}

