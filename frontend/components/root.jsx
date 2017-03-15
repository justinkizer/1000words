import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './sessions/session_form_container.jsx';

const Root = ({ store }) => {

  const redirectIfLoggedIn = () => {
    if (store.getState().session.currentUser) {
      hashHistory.push("/");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } >
        <Route path="/" component={ App }>
          <Route onEnter={ redirectIfLoggedIn } path="/login" component={ SessionFormContainer } />
          <Route onEnter={ redirectIfLoggedIn } path="/join" component={ SessionFormContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
