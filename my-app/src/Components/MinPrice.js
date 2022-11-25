function MinPrice(props) {
  return (
    <>
      <label htmlFor="price_max">Max Price: </label>
      <input
        type="range"
        name="price_max"
        id="price_max"
        defaultValue={props.min}
        min={props.min}
        max={props.max}
        onChange={props.handleMinChange}
      />
      <span>{props.price}</span>
    </>
  );
}
export default MinPrice;
