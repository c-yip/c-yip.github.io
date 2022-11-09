import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleNavOpen() {
    setNavOpen(!navOpen);
  }
  const navOpenClass = navOpen ? "nav-open" : "";

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  const darkModeBackground = darkMode ? "dark-mode-background" : "";
  const darkModeText = darkMode ? "dark-mode-text" : "";

  return (
    <Context.Provider
      value={{
        navOpen,
        handleNavOpen,
        navOpenClass,
        toggleDarkMode,
        darkModeBackground,
        darkModeText,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
