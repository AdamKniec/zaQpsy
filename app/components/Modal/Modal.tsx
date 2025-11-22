import {
  Modal as ModalComponent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { ReactNode } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  children: ReactNode;
}

const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
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
              <Text style={styles.modalText}>Hello World</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalOpen(!modalOpen)}
              >
                <Text style={styles.textStyle}>Hide ModxDal</Text>
              </Pressable>
              {children}
            </View>
          </View>
        </ModalComponent>
      </SafeAreaView>
    </SafeAreaProvider>
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
    height: "50%",
    position: "absolute",
    bottom: 0,
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
