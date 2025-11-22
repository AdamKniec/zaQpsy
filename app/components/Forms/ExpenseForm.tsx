import RootPageStyles from "@/app/expenses/index.styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { Controller, useForm } from "react-hook-form";
import { TextInput, View, Button } from "react-native";

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
  const onSubmit = (data) => console.log(data);
  return (
    <View style={{ width: 200 }}>
      {/* <TextInput placeholder="Za co" style={RootPageStyles.input} /> */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Dodaj produkt"
            // onBlur={onBlur}
            onChangeText={onChange}
            style={RootPageStyles.input}
            value={value}
            placeholderTextColor={"grey"}
          />
        )}
        name="productName"
      />
      {/* <TextInput placeholder="Ile" /> */}
      <Controller
        name="price"
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
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
      {/* <TextInput placeholder="Data" onPress={showDatepicker} /> */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          const year = value.getFullYear();
          const month = value.getMonth() + 1;
          const day = value.getDate();
          return (
            <TextInput
              placeholder="Data"
              value={`${day}/${month}/${year}`}
              onPress={() => {
                DateTimePickerAndroid.open({
                  value: new Date(value),
                  onChange: (_, selectedDate) => {
                    onChange(selectedDate);
                  },
                  mode: "date",
                  is24Hour: true,
                });
              }}
            />
          );
        }}
        name="date"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ExpenseForm;
