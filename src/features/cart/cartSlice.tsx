import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";
import _ from "lodash";

interface IProps {
  cartItems: any[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: IProps = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];

      //using lodash to clear items in the cart
      state.cartItems = _.filter(state.cartItems, function (o: any) {
        return !o.id;
      });
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

      //using lodash
      state.cartItems = _.filter(state.cartItems, function (item: any) {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const itemId = action.payload;
      // const cartItem = state.cartItems.find((item) => item.id === itemId);

      //lodash
      const cartItem = _.find(state.cartItems, function (item: any) {
        return item.id === itemId;
      });

      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, action) => {
      const itemId = action.payload;
      // const cartItem = state.cartItems.find((item) => item.id === itemId.id);

      //lodash
      const cartItem = _.find(state.cartItems, function (item: any) {
        return item.id === itemId;
      });

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price 
      })

      state.amount = amount
      state.total = total
    }
  },
});

export const { clearCart, removeItem, decrease, increase, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
