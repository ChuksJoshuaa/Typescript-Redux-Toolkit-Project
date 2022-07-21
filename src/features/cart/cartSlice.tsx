import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

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
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action, "yes");
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
