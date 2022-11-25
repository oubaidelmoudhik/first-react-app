import Product from "./Product";
// import productsData from "./ProductsData";
import "./ProductList.css";

function ProductsList(props) {
  const products = props.productsData.map((el) => {
    if (el.price <= props.maxPrice && el.price >= props.minPrice) {
      return <Product product={el} key={el.id} />;
    } else {
      return null;
    }
  });
  return <div className="product_list">{products}</div>;
}

export default ProductsList;
