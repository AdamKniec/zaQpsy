import { useQuery } from "@tanstack/react-query";

// TODO FETCH USING SUPABASE OBJECT
const fetchExpenses = async () => {
  const apiUrl = "";
  const apiToken = "";
  const response = await fetch(`${apiUrl}/expenses`, {
    method: "GET",
    headers: {
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
};

const useFetchExpenses = () => {
  const { data } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return { data };
};

export default useFetchExpenses;
