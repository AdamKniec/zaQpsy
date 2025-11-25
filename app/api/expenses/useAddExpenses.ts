import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

// TODO GET RID OF ANY
const addExpenseRequest = async (newExpense: any) => {
  const response = await api.post(`/expenses`, {
    ...newExpense,
  });

  return response;
};

const useAddExpenses = () => {
  const { mutate: addExpense } = useMutation({
    mutationFn: addExpenseRequest,
    onSuccess: () => {
      // todo invalidate only relevent queries
      queryClient.invalidateQueries();
    },
  });

  return {
    addExpense,
  };
};

export default useAddExpenses;
