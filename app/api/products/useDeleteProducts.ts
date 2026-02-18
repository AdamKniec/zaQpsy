import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

const deleteProductRequest = async (id: string) => {
  await api.delete(`/products?id=eq.${id}`);
};

const useDeleteProduct = () => {
  return useMutation({
    mutationFn: deleteProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useDeleteProduct;
