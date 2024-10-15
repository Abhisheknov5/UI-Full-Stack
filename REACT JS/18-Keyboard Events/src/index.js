import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { KeywordEvents } from './Keyboard Events/1-Keyboard Events';
import { PasswordStrength } from './Keyboard Events/2-Password Strength';
import { ProgressBar } from './Keyboard Events/3-ProgressBar';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KeywordEvents />
    <PasswordStrength />
    <ProgressBar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
