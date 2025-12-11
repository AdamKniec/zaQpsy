import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

interface ProductNameProps {
  productName: string;
  handleRemoveProduct: (uuid: string) => void;
  uuid: string;
}

const ListItem = (props: ProductNameProps) => {
  return (
    <View style={{}}>
      <Text style={{}}>
        <Text> {props.productName}</Text>
      </Text>
      <Pressable style={{ justifyContent: "center" }}>
        <Text style={{}} onPress={() => props.handleRemoveProduct(props.uuid)}>
          <Ionicons name="checkbox-outline" size={24} color="green" />
        </Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
