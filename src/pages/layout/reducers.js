import Immutable from 'immutable';
import { ADD_TAB, TOGGLE_TAB, REMOVE_TAB}  from './actionTypes.js'; 

const initState = Immutable.fromJS(
      panes: [{title: '首页', key: 'home'}],
      activeKey: 'home'
})

const  tabList = (state = initState, action) => {
    switch (action.type) {
        case ADD_TAB:
            // return state.panes.push(action.payload)
            return {...state, panes: [...state.panes, action.payload], activeKey: action.payload.key}
        case TOGGLE_TAB:
            return {...state, activeKey: action.payload}
        case REMOVE_TAB:
            return {...state, panes: state.panes.filter(pane => pane.key != action.payload), activeKey: 'home' }
        default: 
            return state
    }
}
export default tabList;