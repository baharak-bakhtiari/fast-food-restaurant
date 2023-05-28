const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = { ...action.payload, theQuantity: 1 };
      return { ...state, cart: [...state.cart, newItem] };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case "CHANGE_QUANTITY": {
      return { ...state, cart: action.payload };
    }

    case "GET-TOTALS": {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, theQuantity } = cartItem;
          const itemTotal = price * theQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += theQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      return {
        ...state,
        total,
        quantity,
      };
    }

    default:
      return state;
  }
};

export default reducer;
