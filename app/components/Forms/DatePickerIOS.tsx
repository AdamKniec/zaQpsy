import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface DatePickerIOSProps {
  control: Control;
}

const DatePickerIOS = (props: DatePickerIOSProps) => {
  const [showIosDatePicker, setShowIosDatePicker] = useState(true);
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
          </>
        );
      }}
    />
  );
};

export default DatePickerIOS;
