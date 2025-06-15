import { Pressable, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    color: "black",
    padding: 10,
  },
});

export default ListItem;
