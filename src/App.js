import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { sendCardData } from "./components/redux-store/cart-slice";
import { getData } from "./components/redux-store/cart-slice";
import Products from "./components/Shop/Products";

let initialState = true;

function App() {
  const showModal = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);
  console.log(showModal);

  
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (initialState) {
      initialState = false;
      return;
    }
    dispatch(sendCardData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
