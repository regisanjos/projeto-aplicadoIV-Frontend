import React, { createContext, useState } from "react";

const DeliveryContext = createContext();

const DeliveryContextProvider = ({ children }) => {
    const [deliverys, setDeliverys] = useState([]);
    return (
        <DeliveryContext.Provider
            value={{
                deliverys,
                setDeliverys
            }}
        >
            {children}
        </DeliveryContext.Provider>
    );
};

export { DeliveryContext, DeliveryContextProvider };
