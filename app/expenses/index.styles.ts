import { StyleSheet, Platform } from "react-native";

const RootPageStyles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    marginTop: 40,
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
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
