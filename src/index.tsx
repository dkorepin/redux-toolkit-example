import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from "history";
import { store } from './config/store';
import Root from './config/Root';
import './index.css';

const history = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <Root
      history={history}
      store={store}
     />
  </React.StrictMode>,
  document.getElementById('root')
);
