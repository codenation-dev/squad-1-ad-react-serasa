import dotenv from 'dotenv';
import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

dotenv.config();

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
