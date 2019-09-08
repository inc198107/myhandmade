import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core';
import Landing from './LandingPage/landing';
import AdminPage from './AdminPanel/adminLogin';


class App extends Component {
  render() {
    return (
      <Container maxWidth='xl'>
        <Switch>
          <Route patch="/" exact component={Landing} />
          <Route patch="/admin" component={AdminPage} />
        </Switch>
      </Container>
    )
  }
}
export default App;
