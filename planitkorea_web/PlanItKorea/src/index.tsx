import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// 요청 실패(만료 토큰, 서버 꺼짐 등)가 처리되지 않아도 화면 전체가 에러 오버레이로 덮이지 않도록
// 콘솔에만 기록한다. 화면별 오류 안내는 각 페이지에서 처리한다.
window.addEventListener(
  "unhandledrejection",
  (event) => {
    console.error("처리되지 않은 요청 오류:", event.reason);
    event.preventDefault();
    event.stopImmediatePropagation();
  },
  true
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
