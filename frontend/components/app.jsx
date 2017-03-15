import React from 'react';
import MainNavBarContainer from './main_navbar/main_navbar_container.jsx';

const App = ({ children }) => (
  <div>
    <MainNavBarContainer/>
    { children }
  </div>
);

export default App;
