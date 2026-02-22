import { Animated, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./ExpenseListItem.styles";
import useSpinAnimation from "@/app/hooks/useSpinAnimation";

interface ListItemProps {
  productName: string;
  handleRemoveExpense: (id: string) => void;
  uuid: string;
  price: number;
  date: string;
  idToBeRemoved: string;
  isLoading: boolean;
}

const ExpenseListItem = (props: ListItemProps) => {
  const exactItemSelected =
    props.isLoading && props.uuid === props.idToBeRemoved;
  const spin = useSpinAnimation(exactItemSelected);

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.flexWrapper}>
        <Text style={{ ...Styles.shared, ...Styles.title }}>
          {props.productName}
          {props.price && <Text> {`- ${props.price}`}</Text>}
        </Text>
        <Text style={Styles.date}>{props.date}</Text>
      </View>
      <Pressable onPress={() => props.handleRemoveExpense(props.uuid)}>
        {exactItemSelected ? (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Ionicons name="cog" size={24} color="green" />
          </Animated.View>
        ) : (
          <Ionicons name="checkbox-outline" size={24} color={"green"} />
        )}
      </Pressable>
    </View>
  );
};

export default ExpenseListItem;
