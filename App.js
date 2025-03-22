import React, { useEffect, useState } from 'react';
import AppNavigation from './AppNavigation';
import NotificationService from './services/NotificationService';

const App = () => {


  return (
    <>
      <NotificationService />
      <AppNavigation />
    </>
  );
};

export default App;
