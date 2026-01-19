import ControlProp from "@/app/types/expenses.types";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";

interface DatePickerIOSProps {
  control: ControlProp;
}

const DatePickerIOS = (props: DatePickerIOSProps) => {
  const [_, setShowIosDatePicker] = useState(true);
  return (
    <Controller
      control={props.control}
      name="date"
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <View
              style={{
                width: "auto",
                borderWidth: 1,
                backgroundColor: "#959393",
                borderRadius: 10,
              }}
            >
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
            </View>
          </>
        );
      }}
    />
  );
};

export default DatePickerIOS;
