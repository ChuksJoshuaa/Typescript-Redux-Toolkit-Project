import React from "react";
import { useAppSelector, useAppDispatch } from "../App";
import { clearCart } from "../features/cart/cartSlice";

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<IProps> = ({ setShowModal }) => {
    const dispatch = useAppDispatch();

    const clearAllItems = () => {
        dispatch(clearCart())
        setShowModal(false);
    }

  return <aside className="modal-container">
    <div className="modal">
        <h4>
            remove all items from your shopping cart
        </h4>
        <div className="btn-container">
            <button className="btn confirm-btn" onClick={clearAllItems}>
                confirm
            </button>
            <button className="btn clear-btn" onClick={() => setShowModal(false)}>
                cancel
            </button>
        </div>
    </div>
  </aside>;
};

export default Modal;
