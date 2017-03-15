import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser }});
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});
