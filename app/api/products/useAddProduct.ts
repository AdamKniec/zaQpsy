import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

const addProductRequest = async (newProduct: any) => {
  const response = await api.post("/products", {
    ...newProduct,
  });
  return response;
};

const useAddProducts = () => {
  const { mutate: addProduct } = useMutation({
    mutationFn: addProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    addProduct,
  };
};

export default useAddProducts;
