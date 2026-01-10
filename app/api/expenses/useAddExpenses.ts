import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

export type Expense = {
  id: string;
  name: string;
  price: number;
  date: Date;
};

const addExpenseRequest = async (newExpense: Expense) => {
  const response = await api.post(`/expenses`, {
    ...newExpense,
  });

  return response;
};

const useAddExpenses = () => {
  const { mutate: addExpense } = useMutation({
    mutationFn: addExpenseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  return {
    addExpense,
  };
};

export default useAddExpenses;
