import { useQuery } from "@tanstack/react-query";
import supabase from "../api";



const fetchProducts = async () => {
 
  const {data} = await supabase.from('products').select()
  
  return data
};

const useFetchProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading };
};

export default useFetchProducts;
