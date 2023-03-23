import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: "A1",
      title: "This is A1",
      description: "Brother of Ra1",
      price: 49.99,
    },
    {
      id: "A2",
      title: "This is A2",
      description: "Brother of G1",
      price: 99.99,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((data) => (
          <ProductItem
            id={data.id}
            key={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
