import React from 'react';
import AppNavigator from './AppNavigator';
import { FitnessContext } from './Context/Context';
import { UserProvider } from './Context/UserContext';






export default function App() {
  return (
    <UserProvider>
    <FitnessContext>
     {/* <MainScreens/> */}
    
      <AppNavigator/>
    </FitnessContext>
    </UserProvider>
  );
}
