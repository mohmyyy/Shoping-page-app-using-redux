import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../redux-store/store";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const myCartButtonHandler = () => {
    dispatch(cartAction.showModalHandler());
  };
  return (
    <button onClick={myCartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
