import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, Pressable, Text, View } from "react-native";
import Styles from "./ListItem.styles";
import useSpinAnimation from "@/app/hooks/useSpinAnimation";

interface ProductNameProps {
  productName: string;
  handleRemoveProduct: (uuid: string) => void;
  uuid: string;
  isLoading: boolean;
  idToBeRemoved: string;
}

const ListItem = (props: ProductNameProps) => {
  const exactItemSelected =
    props.isLoading && props.uuid === props.idToBeRemoved;

  const spin = useSpinAnimation(exactItemSelected);
  return (
    <View style={Styles.wrapper}>
      <Text style={{ ...Styles.text, ...Styles.shared }}>
        <Text> {props.productName}</Text>
      </Text>
      <Pressable
        style={Styles.pressable}
        onPress={() => props.handleRemoveProduct(props.uuid)}
      >
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

export default ListItem;
