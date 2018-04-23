import ADD_TAB from './actionTypes.js'

const initState = {
      panes: [{title: '首页', key: '1'}],
      activeKey: '1'
}
const  addTab = (state = initState, action) => {
    switch (action.type) {
        case ADD_TAB:
            return { panes:[...state.panes, action.payload] }
        default: 
            return state
    }
}
export default addTab