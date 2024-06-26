import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 // const [cartItemsRanking, setCartItemsRanking] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsRanking,setProductsRanking] = useState([])

  const getProducts = async () => {
    await axios
      .get("http://localhost:4500/products") //ver productos ranking
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsRanking = async () => {
    await axios
      .get("http://localhost:4500/productsRanking")  
      .then(({ data }) => setProductsRanking(data.products));
  };


  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:4500/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const getProductsCartRanking = async () => {
    return await axios
      .get("http://localhost:4500/productsRanking")
      .then(({ data }) => setProductsRanking(data.products))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductsRanking();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("http://localhost:4500/products-cart", {
      name,
      img,
      price,
    });

    getProducts();
    getProductsCart();
  };

  const addCartToUsuario = async (product) => {
    const { name, img, price } = product;

    await axios.post("http://localhost:4500/products-cart", {
      name,
      img,
      price,
    });

    getProducts();
    getProductsCart();
  };


  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`http://localhost:4500/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:4500/products-cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };


  const cleartProduct = async () => {
      await axios
        .delete("http://localhost:4500/productsUpdate/")
        .then(({ data }) => console.log(data));
    getProductsRanking();
    getProductsCart();
  };

  const saveCart = async (id,[], amount) => {
         await axios
        .put(`http://localhost:4500/products-cart/$`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }




  return (
    <CartContext.Provider
      value={{ productsRanking,cartItems, products,  addItemToCart, editItemToCart,saveCart,cleartProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
