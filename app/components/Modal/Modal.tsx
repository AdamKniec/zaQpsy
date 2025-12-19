import {
  KeyboardAvoidingView,
  Modal as ModalComponent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ReactNode } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  children: ReactNode;
}

const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <SafeAreaView style={styles.centeredView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <ModalComponent
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
              // TODO HANDLE REQUEST CLOSE
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                {children}
              </View>
            </View>
          </ModalComponent>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    width: "100%",
    bottom: 0,
    position: "absolute",
    height: "35%",
    backgroundColor: "white",
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
