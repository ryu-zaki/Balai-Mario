import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserInfo from './context/UserInfo';
import { BrowserRouter } from 'react-router-dom';
import AnimationGSAP from './context/AnimationGSAP';
import AvailableRecipes from './context/AvailableRecipes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AnimationGSAP>
    <UserInfo>
      <AvailableRecipes>
        <App />
      </AvailableRecipes>
      </UserInfo>
    </AnimationGSAP>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
