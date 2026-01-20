import { StyleSheet, Platform } from "react-native";

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: Platform.select({
      android: 20,
    }),
  },
  listWrapper: { gap: "10px", paddingHorizontal: 20, flex: 1 },
  separator: { height: 16 },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    color: "black",
    width: "100%",
    padding: Platform.select({
      ios: 10,
    }),
    paddingLeft: 15,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "blue",
  },
  buttonLabel: {
    color: "white",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Styles;
