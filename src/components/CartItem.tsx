import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useAppDispatch } from "../App";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

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
  //dispatch
  const dispatch = useAppDispatch();

  const { id, img, title, price, amount } = item;

  const removeId: any = (): any => {
    const { title, id } = item;
    dispatch(removeItem(id));
    alert(`Are you sure you want to remove ${title} from the bag`);
  };

  const decreaseId: any = (): any => {
    const { amount } = item;
    if (amount === 1) {
      removeId();
    } else {
      dispatch(decrease(id));
    }
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeId}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseId}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
