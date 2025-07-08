import { useMutation } from "@tanstack/react-query";

const addProductRequest = async (newProduct: any) => {
  const apiUrl = "";
  const apiToken = "";
  const response = await fetch(`${apiUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  return response.json();
};

const useAddProducts = () => {
  const { mutate: addProduct } = useMutation({
    mutationFn: addProductRequest,
  });

  return {
    addProduct,
  };
};

export default useAddProducts;
