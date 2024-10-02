import React, { createContext, useState, useContext } from 'react';

const DeliveryContext = createContext();

export const useDelivery = () => useContext(DeliveryContext);

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([]);

  const addDelivery = (newDelivery) => {
    setDeliveries([...deliveries, newDelivery]);
  };

  return (
    <DeliveryContext.Provider value={{ deliveries, addDelivery }}>
      {children}
    </DeliveryContext.Provider>
  );
};
