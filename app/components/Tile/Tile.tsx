import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Styles from "./Tile.styles";

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
        <Text style={{ textAlign: "center", color: "#f6f7f8" }}>
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Tile;
