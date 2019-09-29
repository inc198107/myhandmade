import React from 'react';

import { useRoutes } from 'hookrouter';
import { Container } from '@material-ui/core';

import Theme from '../components/theme/theme';
import Landing from './LandingPage/landing';
import AdminPage from './AdminPanel/adminLogin';
import Contacts from './contacts/contacts';

const routes = {
  '/': () => <Landing />,
  '/admin': () => <AdminPage />,
  '/contacts': () => <Contacts />
};

export default function App() {
  const routerResult = useRoutes(routes);
  return (
    <Theme>
      <Container maxWidth='lg'>
        {routerResult}
      </Container>
    </Theme>
  )
}

