import { Platform, StyleSheet } from "react-native";

const RootPageStyles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    color: "black",
    width: "70%",
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
});

export default RootPageStyles;
