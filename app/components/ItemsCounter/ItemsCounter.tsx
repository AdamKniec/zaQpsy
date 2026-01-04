import { Text, View } from "react-native";
import Styles from "./ItemsCounter.styles";

interface ItemsCounterProps {
  value: number;
}

const ItemsCounter = (props: ItemsCounterProps) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.innerText}>{props.value}</Text>
    </View>
  );
};

export default ItemsCounter;
