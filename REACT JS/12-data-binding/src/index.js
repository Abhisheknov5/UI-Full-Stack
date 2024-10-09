import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { OneWayBinding } from './Data-Binding/2-One-way-binding';
import { TwoWayBinding } from './Data-Binding/3-Two-way-binding';
import { Example } from './Data-Binding/4-Example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OneWayBinding />
    <TwoWayBinding/>
    <Example/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
