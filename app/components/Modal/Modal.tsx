import RootPageStyles from "@/app/expenses/index.styles";
import {
  Modal as ModalComponent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const Modal = ({ modalOpen, setModalOpen }: ModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      price: "",
      date: new Date(),
    },
  });

  const onSubmit = (data) => console.log(data);

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
              {/* TODO EXTRACT THIS TO A SEPARATE COMPONENT */}
              <View style={{ width: 200 }}>
                {/* <TextInput placeholder="Za co" style={RootPageStyles.input} /> */}
                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Dodaj produkt"
                      // onBlur={onBlur}
                      onChangeText={onChange}
                      style={RootPageStyles.input}
                      value={value}
                      placeholderTextColor={"grey"}
                    />
                  )}
                  name="productName"
                />
                {/* <TextInput placeholder="Ile" /> */}
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Cena"
                      onChangeText={onChange}
                      style={RootPageStyles.input}
                      value={value}
                      placeholderTextColor={"grey"}
                      keyboardType="numeric"
                    />
                  )}
                />
                {/* <TextInput placeholder="Data" onPress={showDatepicker} /> */}
                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => {
                    const year = value.getFullYear();
                    const month = value.getMonth() + 1;
                    const day = value.getDate();
                    return (
                      <TextInput
                        placeholder="Data"
                        value={`${day}/${month}/${year}`}
                        onPress={() => {
                          DateTimePickerAndroid.open({
                            value: new Date(value),
                            onChange: (_, selectedDate) => {
                              onChange(selectedDate);
                            },
                            mode: "date",
                            is24Hour: true,
                          });
                        }}
                      />
                    );
                  }}
                  name="date"
                />
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
              </View>
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
