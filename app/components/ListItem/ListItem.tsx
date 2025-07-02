import { Pressable, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./ListItem.styles";

interface ListItemProps {
  productName: string;
  handleRemoveProduct: (id: string) => void;
  uuid: string;
}

const ListItem = (props: ListItemProps) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={{ ...Styles.text, ...Styles.shared }}>
        {props.productName}
      </Text>
      <Pressable style={{ justifyContent: "center" }}>
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
