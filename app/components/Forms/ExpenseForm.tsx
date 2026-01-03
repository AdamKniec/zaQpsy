import RootPageStyles from "@/app/expenses/index.styles";

import { Controller } from "react-hook-form";

import { TextInput, View, Button, Platform } from "react-native";

import DatePickerIOS from "./DatePickerIOS";
import DatePickerAndroid from "./DatePickerAndroid";
import { useExpenseForm } from "./useExpenseForm";

const ExpenseForm = () => {
  const { control, isFormValid, onFormSubmit } = useExpenseForm();

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
      <Button title="Submit" onPress={onFormSubmit} disabled={!isFormValid} />
    </View>
  );
};

export default ExpenseForm;
