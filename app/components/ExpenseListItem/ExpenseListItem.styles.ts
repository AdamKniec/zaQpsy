import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  shared: {
    color: "#fff",
    margin: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 1,
  },
  date: {
    color: "#94a3b8",
  },
});

export default Styles;
