import useAddExpenses from "@/app/api/expenses/useAddExpenses";
import RootPageStyles from "@/app/expenses/index.styles";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { v4 as uuidv4 } from "uuid";

import { Controller, set, useForm } from "react-hook-form";
import {
  TextInput,
  View,
  Button,
  Platform,
  Pressable,
  Text,
} from "react-native";
import { useState } from "react";

const ExpenseForm = () => {
  const [showIosDatePicker, setShowIosDatePicker] = useState(true);
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
  const onSubmit = (data) => {
    addExpense({
      id: uuidv4(),
      name: data.productName,
      price: data.price,
      date: data.date,
    });
  };
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
      {Platform.OS === "android" && (
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
      )}
      {Platform.OS === "ios" && (
        <Controller
          control={control}
          name="date"
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => {
            // const year = value.getFullYear();
            // const month = value.getMonth() + 1;
            // const day = value.getDate();
            // return (
            //   <View>
            //     {/* <TextInput
            //       placeholder="Data"
            //       value={`${day}/${month}/${year}`}
            //       onPress={() => {
            //         setShowIosDatePicker(true);
            //       }}
            //     /> */}
            //     {showIosDatePicker && (
            //       <RNDateTimePicker
            //         value={new Date(value)}
            //         testID="asdasd"
            //         mode={"date"}
            //         display="inline"
            //         style={{ height: 10, width: 10 }}
            //         // is24Hour={true}
            //         onChange={(_, selectedDate) => {
            //           onChange(selectedDate);
            //         }}
            //       />
            //     )}
            //   </View>
            // );
            return (
              <>
                <Pressable
                  onPress={() => setShowIosDatePicker(true)}
                  style={{
                    padding: 14,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                  }}
                >
                  <Text>KLIK</Text>
                </Pressable>
                {showIosDatePicker && (
                  <RNDateTimePicker
                    mode="date"
                    display="default"
                    value={value || new Date()}
                    onChange={(event, selectedDate) => {
                      setShowIosDatePicker(false);

                      if (event.type === "dismissed") return;

                      onChange(selectedDate);
                    }}
                  />
                )}
              </>
            );
          }}
        />
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ExpenseForm;
