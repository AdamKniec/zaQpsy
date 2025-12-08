import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Control, Controller } from "react-hook-form";
import { TextInput } from "react-native";

interface DatePickerAndroidProps {
  control: Control;
}

const DatePickerAndroid = (props: DatePickerAndroidProps) => {
  return (
    <Controller
      control={props.control}
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, value } }) => {
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
  );
};

export default DatePickerAndroid;
