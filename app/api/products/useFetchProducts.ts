import { useQuery } from "@tanstack/react-query";

// TODO FETCH USING SUPABASE OBJECT
const fetchProducts = async () => {
  const apiUrl = "";
  const apiToken = "";
  const response = await fetch(`${apiUrl}/products`, {
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

const useFetchProducts = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data };
};

export default useFetchProducts;
