import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { queryClient } from "@/app/_layout";

const deleteExpenseRequest = async (id: string) => {
  await api.delete(`/expenses?id=eq.${id}`);
};

const useDeleteExpense = () => {
  return useMutation({
    mutationFn: deleteExpenseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

export default useDeleteExpense;
