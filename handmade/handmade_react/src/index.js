import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from './store'
import App from './pages/App'
import * as serviceWorker from "./serviceWorker";

import './index.css'

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.register()