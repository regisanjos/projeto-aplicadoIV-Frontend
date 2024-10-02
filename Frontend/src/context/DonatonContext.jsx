import React, { createContext, useState, useContext } from 'react';

const DonationContext = createContext();

export const useDonation = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};
