import React, { useEffect } from "react";
import { Navbar } from "./components";
import { CartContainer } from "./components";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";
import { calculateTotals } from "./features/cart/cartSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

function App() {

  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
