import "./App.css";
import PropsComp from "./components/PropsComp";
import ProductInfo from "./components/ProductInfo";

function App() {
  let bonus = 20;
  let stocksList = ["TCS", "Infy", "SBI"];
  const otherStocks = {
    stock1: "HDFC Bank",
    stock2: "ICICI Bank",
  };

  let product = {
    id: "p01",
    name: "name 1",
    price: 5,
    quantity: 6,
    status: true,
    photo: "iphone13.png",
  };

  return (
    <>
      <PropsComp
        stockName="Happiest Mind"
        price={1200.0}
        isListed={true}
        bonusShare={bonus}
        stockHolders={stocksList}
      />
      <ProductInfo product={product} />
    </>
  );
}

export default App;
