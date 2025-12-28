import {
  KeyboardAvoidingView,
  Modal as ModalComponent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ReactNode } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  children: ReactNode;
}

// TODO REVIEW THE COMPONENT ORDER AND STRUCTURE + STYLES
const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <ModalComponent
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => {
        // TODO HANDLE REQUEST CLOSE
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.centeredView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                <ScrollView keyboardShouldPersistTaps="handled">
                  {children}
                </ScrollView>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ModalComponent>
  );
};
export default Modal;

const styles = StyleSheet.create({
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
