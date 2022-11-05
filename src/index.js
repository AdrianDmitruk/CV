import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import './18n'
import { HashRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Suspense fallback={<>Загрузка...</>}>
      <App />
    </Suspense>
  </HashRouter>

);


