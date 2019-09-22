import React from 'react';
import {useRoutes} from 'hookrouter';
import { Container } from '@material-ui/core';

import Landing from './LandingPage/landing';
import AdminPage from './AdminPanel/adminLogin';
import Contacts from './contacts/contacts'


const routes = {
  '/' : () => <Landing/>,
  '/admin' : () => <AdminPage/>,
  '/contacts':()=> <Contacts/>
};

 export default function App (){
  const routerResult = useRoutes(routes);
    return (
      <Container maxWidth='xl'>
       {routerResult}
      </Container>
    )
  }

