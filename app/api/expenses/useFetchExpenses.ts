import { useQuery } from "@tanstack/react-query";
import supabase from "../api";

const fetchExpenses = async () => {
const { data } = await supabase.from('expenses').select();
return data;
};

const useFetchExpenses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return { data, isLoading };
};

export default useFetchExpenses;
