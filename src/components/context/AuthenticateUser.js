import { FlareSharp } from "@material-ui/icons";
import React, { useReducer, createContext } from "react";

export const UserAuthorizationContext = createContext();

const initialState = {
  isAuth: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuth: true,
        user: {
          email: action.email,
        },
      };

    case "LOGOUT":
      return {
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};

const UserAuthorizationContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserAuthorizationContext.Provider value={{ state, dispatch }}>
      {children}
    </UserAuthorizationContext.Provider>
  );
};

export default UserAuthorizationContextComponent;
