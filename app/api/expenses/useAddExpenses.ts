import { useMutation } from "@tanstack/react-query";
import api from "../api";

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
  });

  return {
    addExpense,
  };
};

export default useAddExpenses;
