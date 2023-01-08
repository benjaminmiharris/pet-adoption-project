import { createContext, useState } from "react";

const LoginModalContext = createContext();

const LoginModalContextProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <LoginModalContext.Provider value={{ modalShow, setModalShow }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export { LoginModalContext, LoginModalContextProvider };
