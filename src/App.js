import React from 'react';
import { ResponsiveContainer } from './components/containers'
import { Switch, Route } from 'react-router-dom'

import { HomePage, GuidesPage } from './components/pages'

function App() {
  return (
    <ResponsiveContainer>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/guides/' component={GuidesPage} />
      </Switch>
    </ResponsiveContainer>
  );
}

export default App;
