import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

import "./styles.modules.scss";
import { Paginacion } from "../Paginacion";

const Products = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);

  const { addItemToCart, products } = useContext(CartContext);
  const maximo = products.length / porPagina;
  return (
    <div>
      <h1>Productos</h1>
      <div className="productsContainer">
        {products &&
          products
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((product, i) => (
              <div key={i} className="product">
                <img src={product.img} alt={product.name} />
                <div>
                  <p>
                    {product.name} - ${product.price}
                  </p>
                </div>
                {!product.inCart ? (
                  <button onClick={() => addItemToCart(product)}>
                    Agregar al carrito
                  </button>
                ) : (
                  <button>En el carrito</button>
                )}
              </div>
            ))}
       
      </div>
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />  </div>
  );
};

export default Products;
