import { useMutation } from "@tanstack/react-query";
import api from "../api";

const addProductRequest = async (newProduct: any) => {
  const response = await api.post("/products", {
    ...newProduct,
  });
  return response;
};

const useAddProducts = () => {
  const { mutate: addProduct } = useMutation({
    mutationFn: addProductRequest,
  });

  return {
    addProduct,
  };
};

export default useAddProducts;
