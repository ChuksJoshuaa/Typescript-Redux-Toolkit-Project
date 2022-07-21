import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useAppDispatch } from "../App";
import { removeItem } from "../features/cart/cartSlice";

interface IItem {
  item: {
    id: string;
    title: string;
    price: string;
    img: string;
    amount: number;
  };
}

const CartItem: React.FC<IItem> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { id, img, title, price, amount } = item;
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
