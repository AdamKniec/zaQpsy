import { Pressable, Text } from "react-native";

interface ButtonProps {
  label: String;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable>
      <Text>{props.label}</Text>
    </Pressable>
  );
};

export default Button;
