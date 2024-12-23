import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TimerDemo } from './Form Events/2-Use Reference Hook';
import { SetIntervalClearInterval } from './Form Events/3-SetInterval or ClearInterval';
import { Image } from './Form Events/4-Image';
import { SlideShow } from './Form Events/5-slide-show';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { SlideShows } from './Form Events/5-slide-show';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimerDemo />
    <SetIntervalClearInterval />
    <Image/>
    <SlideShows />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
