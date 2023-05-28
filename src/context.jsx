import reducer from "./reducer";
import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = ({ menuItem }) => {
    dispatch({ type: "ADD_ITEM", payload: menuItem });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const changeQuantity = ({ id, quantity }) => {
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, theQuantity: quantity };
      }
      return item;
    });

    dispatch({ type: "CHANGE_QUANTITY", payload: tempCart });
  };

  useEffect(() => {
    dispatch({ type: "GET-TOTALS" });
  }, [state.cart]);

  return (
    <appContext.Provider
      value={{ ...state, clearCart, removeItem, changeQuantity, addToCart }}
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
