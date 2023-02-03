import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

/* 1. The <Provider> component makes the Redux store available to any nested components that need to access the Redux store */


//PROVIDER
//to implement he redux throughout the app component, we need to wrap app components with redux
//and for that we neeed to import provider (from redux)
//provider willl provide the state to a components
//but the provider component does not know which state to implement so we assign store={store}
  
//App is having the fuctionalities of routers as per line no 10-12


