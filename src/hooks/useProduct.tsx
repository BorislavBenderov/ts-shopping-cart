import { useContext } from "react";
import {
  ProductContext,
  UseProductsContextType,
} from "../context/ProductContext";

export const useProduct = (): UseProductsContextType => {
  return useContext(ProductContext);
};
