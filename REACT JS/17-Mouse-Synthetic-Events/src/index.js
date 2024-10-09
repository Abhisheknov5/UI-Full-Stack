import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {  MouseSyntheticEvent_1 } from './Mouse-Synthetic-Events/1-Mouse-Synthetic-Events';
import { MouseSyntheticEvent_2 } from './Mouse-Synthetic-Events/2-Mouse-Synthetic-Events';
import { MouseSyntheticEvent_3 } from './Mouse-Synthetic-Events/3-Mouse-Synthetic-Events';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseSyntheticEvent_1 />
    <MouseSyntheticEvent_2 />
    <MouseSyntheticEvent_3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
