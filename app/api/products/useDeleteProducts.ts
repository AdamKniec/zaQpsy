import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/_layout";
import supabase from "../api";

const deleteProductRequest = async (id: string) => {
  await supabase.from('products').delete().eq('id', id);
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
