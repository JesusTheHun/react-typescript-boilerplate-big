import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import store, { history } from './store';
import Home from './screens/Home';
import { getPath } from './utils/router-paths';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={getPath('home')} render={() => Home} />

            <Route render={() => <div>Page not found!</div>} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
