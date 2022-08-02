import React from "react";
import { CartItem } from "./index";
import { useAppSelector } from "../App";


interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CartContainer: React.FC<IProps> = ({setShowModal}) => {
  const { cartItems, total, amount } = useAppSelector((state) => state.cart);

  

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
        <button className="btn clear-btn" onClick={() => setShowModal(true)}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
