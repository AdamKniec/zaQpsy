import {
  KeyboardAvoidingView,
  Modal as ModalComponent,
  Platform,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ReactNode } from "react";
import Styles from "./Modal.styles";

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
        <SafeAreaView style={Styles.centeredView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View style={Styles.centeredView}>
              <View style={Styles.modalView}>
                <Pressable
                  style={[Styles.button, Styles.buttonClose]}
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  <Text style={Styles.textStyle}>X</Text>
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
