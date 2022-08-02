import React, { useEffect , useState} from "react";
import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";
import { calculateTotals } from "./features/cart/cartSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

function App() {

  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Navbar />
      <CartContainer setShowModal={setShowModal} />
    </main>
  );
}

export default App;
