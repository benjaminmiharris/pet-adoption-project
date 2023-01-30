import { createContext, useState } from "react";

const ComponentContext = createContext();

const ComponentContextProvider = ({ children }) => {
  const [personName, setPersonName] = useState([]);
  const [chipsLabel, setChipsLabel] = useState("");
  const [names, setNames] = useState([]);

  return (
    <ComponentContext.Provider
      value={{
        chipsLabel,
        setChipsLabel,
        names,
        setNames,
        personName,
        setPersonName,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponentContextProvider };
