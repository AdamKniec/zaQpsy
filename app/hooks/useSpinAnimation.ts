import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

const useSpinAnimation = (exactItemSelected: boolean) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (exactItemSelected) {
      rotateAnim.setValue(0);

      const animation = Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      animation.start();
      return () => animation.stop();
    }
  }, [exactItemSelected, rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return spin;
};

export default useSpinAnimation;
