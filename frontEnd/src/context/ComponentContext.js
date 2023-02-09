import { createContext, useState } from "react";

const ComponentContext = createContext();

const ComponentContextProvider = ({ children }) => {
  const [personName, setPersonName] = useState([]);
  const [chipsLabel, setChipsLabel] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <ComponentContext.Provider
      value={{
        chipsLabel,
        setChipsLabel,
        names,
        setNames,
        personName,
        setPersonName,
        handleChange,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponentContextProvider };
