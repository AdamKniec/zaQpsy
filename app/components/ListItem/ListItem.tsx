import { Pressable, Text, View, StyleSheet } from "react-native";

interface ListItemProps {
  productName: string;
  handleRemoveProduct: (id: string) => void;
  id: string;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={{ ...Styles.text, ...Styles.shared }}>
        {props.productName}
      </Text>
      <Pressable>
        <Text
          style={{ ...Styles.removeButton, ...Styles.shared }}
          onPress={() => props.handleRemoveProduct(props.id)}
        >
          X
        </Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  wrapper: { display: "flex", flexDirection: "row" },
  text: {
    borderWidth: 1,
    flex: 1,
  },
  removeButton: {
    borderWidth: 1,
  },
  shared: {
    color: "white",
    padding: 10,
    borderColor: "white",
  },
});
