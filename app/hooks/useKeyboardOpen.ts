import { Keyboard } from "react-native";
import { useEffect, useState } from "react";

const useKeyboardOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      setIsOpen(true);
    });

    const hide = Keyboard.addListener("keyboardDidHide", () => {
      setIsOpen(false);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return isOpen;
};

export default useKeyboardOpen;
