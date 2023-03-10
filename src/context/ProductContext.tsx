import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  imageUrl: string;
};

const initState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

export const ProductContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductContextProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products").then((res) => {
        return res.json().catch((err) => {
          console.log(err.message);
        });
      });
      return data;
    };

    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
