import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, handleSetUser: setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
