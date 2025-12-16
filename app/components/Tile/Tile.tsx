import { useRouter } from "expo-router";
import { ImageSourcePropType, Pressable, Text, View } from "react-native";
import Styles from "./Tile.styles";
import { Image } from "expo-image";

interface TileProps {
  label: string;
  path: "/expenses" | "/products";
  imgSrc: ImageSourcePropType;
}

const Tile = (props: TileProps) => {
  const router = useRouter();

  return (
    // TODO FIX TS ISSUE
    <Pressable onPress={() => router.navigate(props.path)} style={Styles.main}>
      <View style={Styles.contentWrapper}>
        <Image source={props.imgSrc} style={Styles.image} />
        <Text style={Styles.text}>{props.label}</Text>
      </View>
    </Pressable>
  );
};

export default Tile;
