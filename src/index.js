import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
//import CardList from "./CardList";
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import {robots} from './robots';


//ReactDOM.render(<Card />, document.getElementById('root'));
//edit 1:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // If anything Wrong happens it may be from 
  <React.StrictMode>
    <App />          
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
