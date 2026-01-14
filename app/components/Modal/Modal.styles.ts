import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    bottom: 0,
    position: "absolute",
    height: 260,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 0,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Styles;
