import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { enableMapSet } from 'immer';
import { StyleSheetManager } from 'styled-components';

enableMapSet();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StyleSheetManager enableVendorPrefixes>
        <App />
      </StyleSheetManager>
    </BrowserRouter>
  </Provider>,
);
