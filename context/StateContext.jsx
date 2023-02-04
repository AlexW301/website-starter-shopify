import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [state, setState] = useState("intial");

  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
