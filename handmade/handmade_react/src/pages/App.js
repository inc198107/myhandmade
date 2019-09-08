import React from 'react';
import {useRoutes} from 'hookrouter';
import { Container } from '@material-ui/core';
import Landing from './LandingPage/landing';
import AdminPage from './AdminPanel/adminLogin';

const routes = {
  '/' : () => <Landing/>,
  '/admin' : () => <AdminPage/>
};

function App (){
  const routerResult = useRoutes(routes);
    return (
      <Container maxWidth='xl'>
       {routerResult}
      </Container>
    )
  }
export default App;
