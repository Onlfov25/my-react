import { call, put } from 'redux-saga/effects';
import { addTab, toggleActiveKey } from '../layout/actions.js'; 

function* createTab(obj) {
    try {
        yield take('ADD_TAB');
        yield put(toggleActiveKey({}));
        
    } catch {
        console.log('新增tab失败');
    }
}

function* createTabSaga() {
    yield take('ADD_TAB', creatTab)
}
export default createTabSaga;