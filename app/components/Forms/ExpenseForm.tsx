import useAddExpenses from "@/app/api/expenses/useAddExpenses";
import RootPageStyles from "@/app/expenses/index.styles";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, View, Button, Platform, Keyboard } from "react-native";

import DatePickerIOS from "./DatePickerIOS";
import DatePickerAndroid from "./DatePickerAndroid";

const TestSchema = z.object({
  productName: z.string().nonempty("Pole wymagane!"),
  price: z.string().nonempty("Pole wymagane"),
  date: z.coerce.date({ message: "Pole wymagane" }),
});
type TestSchemaType = z.infer<typeof TestSchema>;

const ExpenseForm = () => {
  const { control, handleSubmit, formState } = useForm<TestSchemaType>({
    defaultValues: {
      productName: "",
      price: "",
      date: new Date(),
    },

    resolver: zodResolver(TestSchema),
  });

  const { addExpense } = useAddExpenses();
  // @ts-expect-error TODO ADD TS TYPE TO DATA
  const onSubmit = (data) => {
    Keyboard.dismiss();
    addExpense({
      id: uuidv4(),
      name: data.productName,
      price: data.price,
      date: data.date,
    });
  };

  return (
    <View style={{ width: 200, gap: 10 }}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Dodaj produkt"
            onChangeText={onChange}
            style={RootPageStyles.input}
            value={value}
            placeholderTextColor={"grey"}
          />
        )}
        name="productName"
      />
      <Controller
        name="price"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Cena"
            onChangeText={onChange}
            style={RootPageStyles.input}
            value={value}
            placeholderTextColor={"grey"}
            keyboardType="numeric"
          />
        )}
      />

      {Platform.OS === "android" && <DatePickerAndroid control={control} />}

      {Platform.OS === "ios" && <DatePickerIOS control={control} />}
      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </View>
  );
};

export default ExpenseForm;
