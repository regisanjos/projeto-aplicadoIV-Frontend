import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { DeliveryProvider } from './context/DeliveryContext';
import { DonationProvider } from './context/DonationContext';
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <DeliveryProvider>
          <DonationProvider>
            <AppRoutes />
          </DonationProvider>
        </DeliveryProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
