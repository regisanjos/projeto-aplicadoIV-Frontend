import React, { createContext, userState } from "react";

const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersContextProvider }
