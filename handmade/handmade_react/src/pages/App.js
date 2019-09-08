import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from '@material-ui/core';
import Landing from './LandingPage';
import AdminPage from './AdminPanel';


class App extends Component {
  render() {
    return (
      <Router>
        <Container maxWidth='lg'>
          <Switch>
            <Route  patch='/' exact component={Landing} />
            <Route patch='/admin' component={AdminPage} />
          </Switch>
        </Container>
      </Router>
    )
  }

}

export default App;
