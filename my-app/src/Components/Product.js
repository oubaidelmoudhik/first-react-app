import "./ProductCard.css";

function Product(props) {
  return (
    <div className="products_card">
      <img src={props.product.image} alt="" />
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>
        Price: <span>{props.product.price}</span>
      </p>
    </div>
  );
}

export default Product;
