import { useQuery } from "@tanstack/react-query";
import api from "../api";

// TODO FETCH USING SUPABASE OBJECT
const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const useFetchProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading };
};

export default useFetchProducts;
