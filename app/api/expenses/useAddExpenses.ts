import { useMutation } from "@tanstack/react-query";

import { queryClient } from "@/app/_layout";
import supabase from "../api";

export type Expense = {
  id: string;
  name: string;
  price: string;
  date: Date;
};

const addExpenseRequest = async (newExpense: Expense) => {
 await  supabase.from('expenses').insert({...newExpense})
};

const useAddExpenses = () => {
  return useMutation({
    mutationFn:  addExpenseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

export default useAddExpenses;