import { useQuery } from "@tanstack/react-query";



const fetchExpenses = async () => {
  const response: any = ''

  return response;
};

const useFetchExpenses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return { data, isLoading };
};

export default useFetchExpenses;
