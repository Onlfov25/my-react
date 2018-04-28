import Immutable from 'immutable';
import { ADD_TAB, TOGGLE_TAB, REMOVE_TAB}  from './actionTypes.js'; 

const initState = Immutable.fromJS({
      panes: [{title: '首页', key: 'home'}],
      activeKey: 'home'
})

const  tabList = (state = initState, action) => {
    switch (action.type) {
        case ADD_TAB:
            // return {...state, panes: [...state.panes, action.payload], activeKey: action.payload.key}
            return state.push(action.payload.obj)
        case TOGGLE_TAB:
            // return {...state, activeKey: action.payload}
            return state.set('acitveKey', action.payload.key)
        case REMOVE_TAB:
            // return {...state, panes: state.panes.filter(pane => pane.key != action.payload), activeKey: 'home' }
            return state.update('panes', function(item){return item.filter(em => em.key != action.payload.key)})
        default: 
            return state
    }
}
export default tabList;