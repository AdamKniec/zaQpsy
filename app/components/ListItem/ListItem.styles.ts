import { StyleSheet } from "react-native";

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

export default Styles;
