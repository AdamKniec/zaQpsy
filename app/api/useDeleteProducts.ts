import { useMutation } from "@tanstack/react-query";

const deleteProductRequest = async (id: string) => {
  const apiUrl = "";
  const apiToken = "";

  const response = await fetch(`${apiUrl}/products?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
};

export const useDeleteProduct = () => {
  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductRequest,
  });

  return { deleteProduct };
};
