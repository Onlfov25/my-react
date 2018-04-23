import { combineReducers } from 'redux';
import addTab from '../pages/layout/reducers.js'

const initialState = {name: 'zhangsan', age: 18};
const USERINFO_UPDATE = 'USERINFO_UPDATE';
const userinfo  = (state = initialState, action) => {
    switch (action.type) {
        case USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}

const rootReducer = combineReducers({
    userinfo,
    addTab
})
export default rootReducer;