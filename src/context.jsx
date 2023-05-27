import reducer from "./reducer";
import cartItems from "./data.js";
import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const changeQuantity = (changeObj) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: changeObj });
  };

  useEffect(() => {
    dispatch({ type: "GET-TOTALS" });
  }, [state.cart]);

  return (
    <appContext.Provider
      value={{ ...state, clearCart, removeItem, changeQuantity, addItem }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(appContext);
};

export { AppProvider, useAppContext };

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
