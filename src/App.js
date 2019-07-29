import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
