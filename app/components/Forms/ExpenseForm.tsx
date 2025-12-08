import useAddExpenses from "@/app/api/expenses/useAddExpenses";
import RootPageStyles from "@/app/expenses/index.styles";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { TextInput, View, Button, Platform, Keyboard } from "react-native";

import DatePickerIOS from "./DatePickerIOS";
import DatePickerAndroid from "./DatePickerAndroid";

const ExpenseForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      price: "",
      date: new Date(),
    },
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
    <View style={{ width: 200 }}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
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
        rules={{
          maxLength: 100,
        }}
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
      {/* @ts-expect-error TODO FIX CONTROL TYPE */}
      {Platform.OS === "android" && <DatePickerAndroid control={control} />}
      {/* @ts-expect-error TODO FIX TS ISSUE */}
      {Platform.OS === "ios" && <DatePickerIOS control={control} />}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ExpenseForm;
