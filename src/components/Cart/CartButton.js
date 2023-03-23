import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../redux-store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const myCartButtonHandler = () => {
    dispatch(uiAction.showModalHandler());
  };
  return (
    <button onClick={myCartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
