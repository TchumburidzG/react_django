import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [devices, setDevices] = useState({});

  return (
    <GlobalContext.Provider value={{devices, setDevices}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useCallbackState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useCheckboxState must be used within a CheckboxStateProvider');
  }
  return context;
};