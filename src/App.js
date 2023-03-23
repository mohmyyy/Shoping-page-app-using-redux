import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showModal = useSelector((state) => state.showModal);
  console.log(showModal)
  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
