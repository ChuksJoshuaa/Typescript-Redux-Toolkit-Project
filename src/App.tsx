import React, { useEffect, useState } from "react";
import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

function App() {
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    <div className="loading">
      <h1>Loading...</h1>
    </div>;
  }

  return (
    <main>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Navbar />
      <CartContainer setShowModal={setShowModal} />
    </main>
  );
}

export default App;
