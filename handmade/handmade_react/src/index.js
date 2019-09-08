import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store';
import App from './pages/App';
import * as serviceWorker from "./serviceWorker";

import './index.css'

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.register()