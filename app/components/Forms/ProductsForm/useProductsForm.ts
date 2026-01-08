import { zodResolver } from "@hookform/resolvers/zod";
import useAddProducts from "@/app/api/products/useAddProduct";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import * as z from "zod";

const addProductSchema = z.object({
  name: z.string().nonempty("Pole wymagane!"),
});
type AddExpenseSchemaType = z.infer<typeof addProductSchema>;

const useProductsForm = () => {
  const { addProduct } = useAddProducts();

  const { control, handleSubmit, reset, formState } =
    useForm<AddExpenseSchemaType>({
      defaultValues: {
        name: "",
      },
      resolver: zodResolver(addProductSchema),
    });
  const isFormValid = formState.isValid;

  //todo handle this case properly
  const handleButtonPress = (data: any) => {
    addProduct({
      id: uuidv4(),
      name: data.name,
    });

    reset();
  };

  return { onSubmit: handleSubmit(handleButtonPress), control, isFormValid };
};

export default useProductsForm;
