import { useCart } from "../hooks/useCart";
import { useProduct } from "../hooks/useProduct";
import { UseProductsContextType } from "../context/ProductContext";
import { ReactElement } from "react";
import { Product } from "./Product";

export const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProduct();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--products">{pageContent}</main>;

  return content;
};
