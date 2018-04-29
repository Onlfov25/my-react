import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { LocaleProvider } from 'antd';
import Routes from './router.js';

import './app.less';

// antd组件修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


ReactDOM.render(
   <Provider store={store}>
       <LocaleProvider locale={zhCN}>
           <Routes />
       </LocaleProvider>
   </Provider>,
    document.getElementById('root')
)