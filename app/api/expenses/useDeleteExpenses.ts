import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/_layout";
import supabase from "../api";

const deleteExpenseRequest = async (id: string) => {
  await supabase.from('expenses').delete().eq('id', id)
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

