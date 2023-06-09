import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const rootStore = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={rootStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
