import { Pressable, Text } from "react-native";
import Styles from "./Button.styles";

interface ButtonProps {
  label: String;
  disabled: boolean;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={
        props.disabled
          ? { ...Styles.button, ...Styles.buttonDisabled }
          : { ...Styles.button }
      }
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <Text style={Styles.buttonLabel}>{props.label}</Text>
    </Pressable>
  );
};

export default Button;
