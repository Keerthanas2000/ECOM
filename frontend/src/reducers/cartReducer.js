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
          const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
    
          if (existingItemIndex !== -1) {
            const updatedCartItems = state.cartItems.map((item, index) => {
              if (index === existingItemIndex) {
                const newQuantity = item.quantity + 1;
                return {
                  ...item,
                  quantity: newQuantity,
                  total_item_price: newQuantity * item.price
                };
              }
              return item;
            });
    
            const newTotalPrice = state.totalPrice + action.payload.price;
            const newTaxes = newTotalPrice * 0.18;
    
            return {
              ...state,
              cartItems: updatedCartItems,
              cartCounter: state.cartCounter + 1,
              totalPrice: newTotalPrice,
              taxes: newTaxes,
              grandTotal: newTotalPrice + newTaxes + state.deliveryCharges
            };
          } else {
            const newCartItems = [
              ...state.cartItems,
              {
                ...action.payload,
                quantity: 1,
                total_item_price: action.payload.price
              }
            ];
    
            const newTotalPrice = state.totalPrice + action.payload.price;
            const newTaxes = newTotalPrice * 0.18;
    
            return {
              ...state,
              cartItems: newCartItems,
              cartCounter: state.cartCounter + 1,
              totalPrice: newTotalPrice,
              taxes: newTaxes,
              grandTotal: newTotalPrice + newTaxes + state.deliveryCharges
            };
          }
        }
    
        case 'remove_from_cart': {
          const removedItem = state.cartItems.find(item => item.id === action.payload.id);
          if (!removedItem) return state;
    
          const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
          const updatedTotalPrice = state.totalPrice - (removedItem.price * removedItem.quantity);
          const updatedTaxes = updatedTotalPrice * 0.18;
    
          return {
            ...state,
            cartItems: updatedCartItems,
            cartCounter: state.cartCounter - removedItem.quantity,
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
    