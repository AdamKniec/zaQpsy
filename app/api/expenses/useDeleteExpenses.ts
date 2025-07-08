import { useMutation } from "@tanstack/react-query";

const deleteExpenseRequest = async (id: string) => {
  const apiUrl = "";
  const apiToken = "";
  const response = await fetch(`${apiUrl}/expenses?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
};

const useDeleteExpense = () => {
  const { mutate: deleteExpense } = useMutation({
    mutationFn: deleteExpenseRequest,
  });

  return { deleteExpense };
};

export default useDeleteExpense;
