// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import tabList from '../pages/layout/reducers.js';

const initialState = Immutable.fromJS({name: 'zhangsan', age: 18});
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
    userinfo: userinfo,
    tabList: tabList
})
export default rootReducer;