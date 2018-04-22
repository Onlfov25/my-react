import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { LocaleProvider } from 'antd';
import Router from './router.js'

// antd组件修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


ReactDOM.render(
   <Provider store={store}>
       <LocaleProvider locale={zhCN}>
           <Router />
       </LocaleProvider>
   </Provider>,
    document.getElementById('root')
)