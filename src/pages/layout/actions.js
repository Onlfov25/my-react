import ADD_TAB from './actionTypes.js';


export function addTab(text) {
    return {
        type: ADD_TAB,
        payload: text
    }
}