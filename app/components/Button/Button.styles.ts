import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "blue",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  buttonLabel: {
    color: "#fff",
  },
});

export default Styles;
