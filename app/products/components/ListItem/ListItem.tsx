import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

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

const Styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    paddingVertical: 15,
    fontWeight: "500",
  },

  shared: {
    color: "#fff",
    padding: 10,
  },
});
