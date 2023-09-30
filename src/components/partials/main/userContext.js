// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const login = (username) => {
    setUser(username);
    setUserLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setUserLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
