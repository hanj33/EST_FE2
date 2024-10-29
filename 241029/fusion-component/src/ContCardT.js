import styled from "styled-components";
import PriceFormatter from "./Components/PriceFormatter";

function App() {
  return (
    <div>
      <PriceFormatter price={1000} currencyCode="USD" />
      <PriceFormatter price={1000} currencyCode="KRW" />
      <PriceFormatter price={1000} currencyCode="GBP" />
      <PriceFormatter price={1000} currencyCode="JPY" />
    </div>
  );
}

export default App;
