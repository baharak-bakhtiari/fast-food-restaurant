const reducer = (state, action) => {
  switch (action.type) {
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
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id && action.payload.quantity > 0) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }

    case "GET-TOTALS": {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
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
  }
};

export default reducer;
