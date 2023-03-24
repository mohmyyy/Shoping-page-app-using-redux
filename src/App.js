import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { notificationAction } from "./components/redux-store/notification-slice";
import Products from "./components/Shop/Products";

let initialState = true;


function App() {
  const showModal = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log(cart);
  console.log(showModal);
  useEffect(() => {
    const cartItem = async () => {
      try {
        dispatch(
          notificationAction.showNotification({
            status: "pending",
            type: "Pending",
            message: "Sending cart Data",
            notification: true,
          })
        );
        const response = await fetch(
          "https://react-redux-11dbf-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Error");
        } else {
          dispatch(
            notificationAction.showNotification({
              status: "success",
              type: "Success",
              message: "Send Cart data successfully",
              notification: true,
            })
          );
        }
      } catch (error) {
        dispatch(
          notificationAction.showNotification({
            status: "error",
            type: "Error",
            message: "Sending cart Data Failed",
            notification: true,
          })
        );
      }
    };
    if (initialState) {
      initialState = false;
      return;
    }
    cartItem();
  }, [cart]);

  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
