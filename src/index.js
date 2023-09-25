import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode is a React Developer Tool primarily used for highlighting potential problems in a web application. It provides warnings to developers as feedback for errors that occur in an application, with no effect on the result because it does not render any visible UI.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
//  <App />  this suggests that insert app component where ID='root' (likely in index.html - see it)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
