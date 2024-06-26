import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import "./styles.modules.scss";

const Products = () => {
  const {  productsRanking } = useContext(CartContext);
  return (
    <div><h1 >Ranking de Productos mas vendidos</h1>
      <div className="productsContainer">
        {productsRanking &&
          productsRanking.map((product, i) => (
            <div key={i} className="product">
              <img src={product.img} alt={product.name} />
              <div>
                <p>{product.name}</p> <p> {product.amountInTime}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
