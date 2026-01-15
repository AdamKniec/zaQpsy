import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./ExpenseListItem.styles";

interface ListItemProps {
  productName: string;
  handleRemoveExpense: (id: string) => void;
  uuid: string;
  price: number;
  date: string;
}

const ExpenseListItem = (props: ListItemProps) => {
  return (
    <View style={Styles.wrapper}>
      <View style={{ flex: 1 }}>
        <Text style={{ ...Styles.shared, ...Styles.title }}>
          {props.productName}
          {props.price && <Text> {`- ${props.price}`}</Text>}
        </Text>
        <Text style={Styles.date}>{props.date}</Text>
      </View>
      <Pressable style={{ justifyContent: "center" }}>
        <Text
          style={{ ...Styles.shared }}
          onPress={() => props.handleRemoveExpense(props.uuid)}
        >
          <Ionicons name="checkbox-outline" size={24} color="green" />
        </Text>
      </Pressable>
    </View>
  );
};

export default ExpenseListItem;
