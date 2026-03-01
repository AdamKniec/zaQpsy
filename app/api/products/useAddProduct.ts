import { useMutation } from "@tanstack/react-query";
// import api from "../api";
import { queryClient } from "@/app/_layout";
// import { UUIDTypes } from "uuid";

// const addProductRequest = async (newProduct: {
//   name: string;
//   id: UUIDTypes;
// }) => {
//   const response = await api.post("/products", {
//     ...newProduct,
//   });
//   return response;
// };

const useAddProducts = () => {
  return useMutation({
    // mutationFn: addProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useAddProducts;
