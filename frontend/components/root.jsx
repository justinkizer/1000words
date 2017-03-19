import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomePage from './home_page/home_page.jsx';
import ProfilePageContainer from './profile_page/profile_page_container.jsx';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } >
        <Route path="/" component={ HomePage }>
        </Route>
        <Route path="/users/:id" component={ ProfilePageContainer }>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
