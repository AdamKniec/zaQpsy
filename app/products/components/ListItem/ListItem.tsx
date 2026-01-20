import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import Styles from "./ListItem.styles";

interface ProductNameProps {
  productName: string;
  handleRemoveProduct: (uuid: string) => void;
  uuid: string;
}

const ListItem = (props: ProductNameProps) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={{ ...Styles.text, ...Styles.shared }}>
        <Text> {props.productName}</Text>
      </Text>
      <Pressable style={Styles.pressable}>
        <Text
          style={{ ...Styles.shared }}
          onPress={() => props.handleRemoveProduct(props.uuid)}
        >
          <Ionicons name="checkbox-outline" size={24} color="green" />
        </Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
