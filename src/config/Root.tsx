import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from './routes';

const Root = (props) => {  
  const { history, store } = props;

  return (
    <Provider store={store}>
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </Provider>
  );
}

export default Root;