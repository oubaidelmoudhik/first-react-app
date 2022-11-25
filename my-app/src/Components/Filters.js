import MaxPrice from "./MaxPrice";
import MinPrice from "./MinPrice";

function Filters(props) {
  return (
    <form>
      <MinPrice
        min={Math.min(...props.pricesArr)}
        max={Math.max(...props.pricesArr)}
        handleMinChange={props.handleMinChange}
        price={props.minPrice}
      />
      <br></br>
      <MaxPrice
        min={Math.min(...props.pricesArr)}
        max={Math.max(...props.pricesArr)}
        handleMaxChange={props.handleMaxChange}
        price={props.maxPrice}
      />
    </form>
  );
}

export default Filters;
