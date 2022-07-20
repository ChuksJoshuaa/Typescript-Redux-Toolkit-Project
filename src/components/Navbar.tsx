import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Navbar = () => {
  const { amount } = useAppSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
          <p></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
