import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Styles from "./Tile.styles";
import { Image } from "expo-image";
import ShoppingCartIcon from "../../../assets/images/shopping-cart.png";

interface TileProps {
  label: string;
  path: "/expenses" | "/products";
}

const Tile = (props: TileProps) => {
  const router = useRouter();

  return (
    // TODO FIX TS ISSUE
    <Pressable onPress={() => router.navigate(props.path)} style={Styles.main}>
      <View>
        <Image source={ShoppingCartIcon} style={{ width: 100, height: 100 }} />
        <Text style={{ textAlign: "center", color: "#f6f7f8" }}>
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Tile;
