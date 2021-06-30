import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//记录页面性能，使用了'web-vitals'库
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 外层包裹的标签可以检查App组件内是否有不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
