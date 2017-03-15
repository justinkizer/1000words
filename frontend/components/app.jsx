import React from 'react';
import GreetingContainer from './greetings/greeting_container.jsx';

const App = ({ children }) => (
  <div>
    <h1>1000words</h1>
    <GreetingContainer/>
    { children }
  </div>
);

export default App;
