import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen(!navOpen);
  }

  const navOpenClass = navOpen ? "nav-open" : "";

  return (
    <Context.Provider value={{ navOpen, handleNavOpen, navOpenClass }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
