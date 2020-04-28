 import { produce } from 'immer'

 export const INITAL_STATE = []

 export default function elements(state = INITAL_STATE, action) {
     return produce(state, draft => {
         switch (action.type) {
             case 'ADD_ELEMENT':
                 draft.push(action.payload.element)
                 break
            default:
                
         }
     })
 }