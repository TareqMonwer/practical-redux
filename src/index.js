import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "semantic-ui-css/semantic.css";
import configureStore from './store/configureStore';
const store = configureStore();

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  const App = require("./App").default;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    // Support hot reloading of components.
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

render();
