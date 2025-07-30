import { useMutation } from "@tanstack/react-query";
import api from "../api";

const deleteExpenseRequest = async (id: string) => {
  await api.delete(`/expenses?id=eq.${id}`);
};

const useDeleteExpense = () => {
  const { mutate: deleteExpense } = useMutation({
    mutationFn: deleteExpenseRequest,
  });

  return { deleteExpense };
};

export default useDeleteExpense;
