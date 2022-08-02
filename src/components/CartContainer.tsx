import React from "react";
import { CartItem } from "./index";
import { useAppSelector, useAppDispatch } from "../App";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${parseFloat(total.toFixed(2))}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
