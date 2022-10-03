import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './components/HomePage';
import ButtonUI from './components/Button';
import Test from './components/Test';
import UR from './components/UR';
import { Provider } from 'react';
import store from './components/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<UR/>*/}
  <App/> 
   
   {/* <Test/>*/}
  </React.StrictMode>

);


