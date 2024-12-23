import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FormDemo } from './Forms in React/1-Form';
import { FormValidation } from './Forms in React/2-FormikValidation';
import { YupforValidation } from './Forms in React/3-Yup-For-Validation';
import { OnBlur } from './Forms in React/4-onBlur';
import { FormicComponents } from './Forms in React/5-Fomik components';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormDemo />
    <FormValidation />
    <YupforValidation />
    <OnBlur />
    <FormicComponents />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
