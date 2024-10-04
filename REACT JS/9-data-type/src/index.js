import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Number, Numbers } from './DataType/2-Number';
import { String1, String2, String3  } from './DataType/3-StringType';
import { Boolean } from './DataType/4-Boolean';
import { Undefined } from './DataType/5-undefined';
import { Null } from './DataType/6-null';
import { Array } from './DataType/7-Array';
import { Object } from './DataType/8-ObjectType';
import { BindingArrayObjects } from './DataType/9- Binding Array of Objects';
import { NestedIterators } from './DataType/10-Nested  Iterators';
import { NestedList } from './DataType/11-Nested List';
import { NestedLists } from './DataType/12-Nested List';
import { Datess } from './DataType/13-date'
import { RegularExpression } from './DataType/14-RegularExpression';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Number />
    <Numbers/>
    <String1/>
    <String2/>
    <String3/>
    <Boolean/>
    <Undefined/>
    <Null/>
    <Array/>
    <Object/>
    <BindingArrayObjects/>
    <NestedIterators/>
    <NestedList/>
    <NestedLists/>
    <Datess/>
    <RegularExpression/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
