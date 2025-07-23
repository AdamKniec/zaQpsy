import { useMutation } from "@tanstack/react-query";
import api from "../api";

const deleteProductRequest = async (id: string) => {
  await api.delete(`/products?id=eq.${id}`);
};

const useDeleteProduct = () => {
  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductRequest,
  });

  return { deleteProduct };
};

export default useDeleteProduct;
