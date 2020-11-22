import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageOne, PageThree, PageTwo } from './pages';
import LINKS from './utils/LINKS';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={LINKS.pageOne} component={PageOne} />
        <Route exact path={LINKS.pageTwo} component={PageTwo} />
        <Route exact path={LINKS.pageThree} component={PageThree} />
      </Switch>
    </Router>
  );
};

export default App;
