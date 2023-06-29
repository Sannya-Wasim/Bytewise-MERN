import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemsIndex].cartTotalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += action.payload.price;
    },

    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        state.cartTotalAmount -= item.price * item.cartTotalQuantity;
        state.cartItems.splice(itemIndex, 1);
      } else {
        const tempProduct = { ...action.payload };
      }
    },

    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartTotalQuantity += 1;
        state.cartItems[itemIndex].cartTotalQuantity +=1;
        state.cartTotalAmount += state.cartItems[itemIndex].price;
      }
    },

    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        if (item.cartTotalQuantity > 1) {
          item.cartTotalQuantity -= 1;
          state.cartTotalAmount -= item.price;
        }
      }
    },

    resetCart(state, action){
      return initialState;
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
