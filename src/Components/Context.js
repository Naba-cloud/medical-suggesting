import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allDoctors, setDoctors] = useState([]);
  return (
    <AppContext.Provider
      value={{
        user,
        handleSetUser: setUser,
        allDoctors,
        handleSetDoctors: setDoctors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
