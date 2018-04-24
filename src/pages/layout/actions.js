import { ADD_TAB, TOGGLE_TAB, REMOVE_TAB  }  from './actionTypes.js'



const addTab = (obj) => ({
        type: ADD_TAB,
        payload: obj
})

const toggleActiveKey = (key) => ({
        type: TOGGLE_TAB,
        payload: key
})

const removeTab = (key) => ({
        type: REMOVE_TAB,
        payload: key
})

export {addTab, toggleActiveKey, removeTab};