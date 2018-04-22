import { combineReducers } from 'redux';

const initialState = {};
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
    userinfo
})
export default rootReducer;