import React from "react";

function PropsComp(props) {
  return (
    <>
      <h2>
        Props Data:{props.stockName} - Rs/-{props.price}-{" "}
        {props.isListed.toString()} - Bonus share {props.bonusShare}
        {console.log(props.stockHolders)}
      </h2>
      {/* <div>
        <p>Other stocks names:{props.otherStockNames.stock1}</p>
      </div> */}
    </>
  );
}

export default PropsComp;
