import { useMutation } from "@tanstack/react-query";

// TODO GET RID OF ANY
const addExpenseRequest = async (newExpense: any) => {
  const apiUrl = "";
  const apiToken = " ";
  const response = await fetch(`${apiUrl}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(newExpense),
  });

  if (!response.ok) {
    throw new Error("Failed to add expense");
  }

  return response.json();
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
