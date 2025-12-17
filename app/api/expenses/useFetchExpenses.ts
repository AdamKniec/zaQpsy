import { useQuery } from "@tanstack/react-query";
import api from "../api";

// TODO FETCH USING SUPABASE OBJECT
const fetchExpenses = async () => {
  const response = await api.get(`/expenses`);

  return response.data;
};

const useFetchExpenses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return { data, isLoading };
};

export default useFetchExpenses;
