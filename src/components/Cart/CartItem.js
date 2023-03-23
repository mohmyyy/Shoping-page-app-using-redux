import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../redux-store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  console.log(props.item);
  const showModal = useSelector((state) => state.ui.showModal);
  const dispatch = useDispatch();

  const addQuantity = () => {
    dispatch(cartAction.addToCart({ title, quantity, total, price, id }));
  };
  const removeQuantity = () => {
    dispatch(cartAction.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeQuantity}>-</button>
          <button onClick={addQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
