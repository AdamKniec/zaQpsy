import { useQuery } from "@tanstack/react-query";
import api from "../api";

// TODO FETCH USING SUPABASE OBJECT
const fetchExpenses = async () => {
  const response = await api.get(`/expenses`);

  return response.data;
};

const useFetchExpenses = () => {
  const { data } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return { data };
};

export default useFetchExpenses;
