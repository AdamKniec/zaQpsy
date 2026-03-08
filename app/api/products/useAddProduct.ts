import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/_layout";
import { UUIDTypes } from "uuid";
import supabase from "../api";

const addProductRequest = async (newProduct: {
  name: string;
  id: UUIDTypes;
}) => {
  await supabase.from('products').insert({
    ...newProduct
  })
};

const useAddProducts = () => {
  return useMutation({
    mutationFn: addProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useAddProducts;
