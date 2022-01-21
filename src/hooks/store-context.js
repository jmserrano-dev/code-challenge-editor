import React from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => React.useContext(StoreContext);

export { StoreProvider, useStore };
