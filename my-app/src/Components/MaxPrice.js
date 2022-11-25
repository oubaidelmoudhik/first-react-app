function MaxPrice(props) {
  return (
    <>
      <label htmlFor="price_max">Max Price: </label>
      <input
        type="range"
        name="price_max"
        id="price_max"
        defaultValue={props.max}
        min={props.min}
        max={props.max}
        onChange={props.handleMaxChange}
      />
      <span>{props.price}</span>
    </>
  );
}
export default MaxPrice;
