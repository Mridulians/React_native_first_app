import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

const ModalForm = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Handle back button close on Android
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Fill the Form</Text>

          {/* Form Fields */}
          <TextInput placeholder="Name" style={styles.inputField} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputField}
          />
          <TextInput
            placeholder="Message"
            multiline={true}
            numberOfLines={4}
            style={[styles.inputField, { height: 80 }]}
          />

          {/* Modal Buttons */}
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.button, styles.closeButton]}
              onPress={onClose} // Close modal
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.submitButton]}
              onPress={() => {
                onClose();
                alert("Form Submitted!");
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#d9534f", // Red for Cancel
  },
  submitButton: {
    backgroundColor: "#5cb85c", // Green for Submit
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ModalForm;
