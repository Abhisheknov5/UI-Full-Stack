import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { XMLhttpRequestObject } from './Accesing-Data-from-APIs-or-JSON-File/1-XML-Http-Request-Object';
import { JavaScriptFetch } from './Accesing-Data-from-APIs-or-JSON-File/2- JavaScript fetch()';
import { JQueryAjax } from './Accesing-Data-from-APIs-or-JSON-File/3-JQuery-Ajax';
import { ThirdPartyLibraries } from './Accesing-Data-from-APIs-or-JSON-File/4-3rd Party Libraries';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <XMLhttpRequestObject/>
    <JavaScriptFetch />
    <JQueryAjax />
    <ThirdPartyLibraries/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
