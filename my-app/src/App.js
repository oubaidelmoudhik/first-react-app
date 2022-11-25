import "./App.css";
import Filters from "./Components/Filters";
import ProductsList from "./Components/ProductsList";
import productsData from "./Components/ProductsData";
import { useState } from "react";
// import Hello from "./Components/Hello";
// import Welcome from "./Components/Welcome";

function App() {
  const priceArr = productsData.map((el) => el.price);
  const [minValue, setMinValue] = useState(Math.min(...priceArr));
  const [maxValue, setMaxValue] = useState(Math.max(...priceArr));

  function handleMaxChange(e) {
    setMaxValue(e.target.value);
  }
  function handleMinChange(e) {
    setMinValue(e.target.value);
  }
  return (
    <div className="App">
      <Filters
        maxPrice={Math.round(maxValue)}
        minPrice={Math.floor(minValue)}
        handleMaxChange={handleMaxChange}
        handleMinChange={handleMinChange}
        pricesArr={priceArr}
      />
      <ProductsList
        maxPrice={Math.round(maxValue)}
        minPrice={Math.floor(minValue)}
        productsData={productsData}
      />
    </div>
  );
}

export default App;
