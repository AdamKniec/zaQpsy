import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

const deleteProductRequest = async (id: string) => {
  await api.delete(`/products?id=eq.${id}`);
};

const useDeleteProduct = () => {
  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { deleteProduct };
};

export default useDeleteProduct;
