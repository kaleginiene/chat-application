import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    image: "",
    city: "",
  });

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
