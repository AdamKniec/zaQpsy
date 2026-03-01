import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddExpenses from "@/app/api/expenses/useAddExpenses";
// import { Keyboard } from "react-native";
// import { v4 as uuidv4 } from "uuid";

const addExpenseSchema = z.object({
  productName: z.string().nonempty("Pole wymagane!"),
  price: z.string().nonempty("Pole wymagane"),
  date: z.coerce.date({ message: "Pole wymagane" }),
});

const expenseFormDefaultValues = {
  productName: "",
  price: "",
  date: new Date(),
};

type AddExpenseSchemaType = z.infer<typeof addExpenseSchema>;

const useExpenseForm = () => {
  const { 
    // mutate,
     isPending } = useAddExpenses();
  const { control, handleSubmit, formState } = useForm<AddExpenseSchemaType>({
    defaultValues: expenseFormDefaultValues,
    resolver: zodResolver(addExpenseSchema),
  });

  
  // const onSubmit = (data: AddExpenseSchemaType) => {
  //   Keyboard.dismiss();
  //   // mutate({
  //   //   id: uuidv4(),
  //   //   name: data.productName,
  //   //   price: data.price,
  //   //   date: data.date,
  //   // });
  // };

  const isFormValid = formState.isValid;

  return {
    control,
    handleSubmit,
    isFormValid,
    onFormSubmit: handleSubmit(() => {}),
    isPending,
  };
};

export default useExpenseForm;
