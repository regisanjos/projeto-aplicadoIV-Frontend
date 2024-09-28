import React, { createContext, useState } from "react";

const DonationsContext = createContext();

const DonationsContextProvider = ({ children }) => {
    const [donations, setDonations] = useState([]);
    return (
        <DonationsContext.Provider
            value={{
                donations,
                setDonations
            }}
        >
            {children}
        </DonationsContext.Provider>
    );
};  

export { DonationsContext, DonationsContextProvider };
