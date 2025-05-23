// cartReducer.js

const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  taxes: 0,
  grandTotal: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_to_cart': {
      const newItem = action.payload;

      // Check if the product already exists in the cart
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        // Update quantity and total item price if item exists in the cart
        const updatedCartItems = state.cartItems.map(item =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total_item_price: (item.quantity + 1) * item.price
              }
            : item
        );

        const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.total_item_price, 0);
        const updatedTaxes = updatedTotalPrice * 0.18;

        return {
          ...state,
          cartItems: updatedCartItems,
          cartCounter: updatedCartItems.length,
          totalPrice: updatedTotalPrice,
          taxes: updatedTaxes,
          grandTotal: updatedTotalPrice + updatedTaxes + state.deliveryCharges
        };
      } else {
        // Add new item to the cart if not already present
        const updatedCartItems = [...state.cartItems, {
          ...newItem,
          quantity: 1,
          total_item_price: newItem.price
        }];

        const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.total_item_price, 0);
        const updatedTaxes = updatedTotalPrice * 0.18;

        return {
          ...state,
          cartItems: updatedCartItems,
          cartCounter: updatedCartItems.length,
          totalPrice: updatedTotalPrice,
          taxes: updatedTaxes,
          grandTotal: updatedTotalPrice + updatedTaxes + state.deliveryCharges
        };
      }
    }

    case 'remove_from_cart': {
      const removedItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!removedItem) return state;

      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.total_item_price, 0);
      const updatedTaxes = updatedTotalPrice * 0.18;

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: updatedCartItems.length,
        totalPrice: updatedTotalPrice,
        taxes: updatedTaxes,
        grandTotal: updatedTotalPrice + updatedTaxes + state.deliveryCharges
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

