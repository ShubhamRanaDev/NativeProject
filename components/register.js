import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./Header";
import Card from "./Card";
import { Ionicons } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailHandler = (inputText) => {
    setEmail(inputText);
  };

  const userNameHandler = (inputText) => {
    setUserName(inputText);
  };

  const passwordHandler = (inputText) => {
    setPassword(inputText);
  };

  const confirmPasswordHandler = (inputText) => {
    setConfirmPassword(inputText);
  };

  const resetEmailHandler = () => {
    setEmail("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Weather App" />
        <View style={styles.registerContainer}>
          <Text style={styles.intro}>Register</Text>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-mail" size={24} color="white" />
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={emailHandler}
            />
          </Card>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-person" size={24} color="white" />
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={userNameHandler}
            />
          </Card>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-lock" size={24} color="white" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={passwordHandler}
            />
          </Card>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-lock" size={24} color="white" />
            <TextInput
              placeholder="Confirm password"
              style={styles.input}
              onChangeText={confirmPasswordHandler}
            />
          </Card>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="REGISTER" color="#010124" />
            </View>
            <View style={styles.button}>
              <Button
                title="SIGN IN"
                onPress={() => navigation.navigate("Login")}
                color="#010124"
              />
            </View>
          </View>
          <Text>
            {email},{userName},{password},{confirmPassword}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f1341",
    flex: 1,
  },
  intro: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  registerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  text: {
    fontSize: 20,
  },
  inputContainer: {
    width: "80%",
    height: 60,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 10,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    width: 120,
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
    fontSize: 10,
  },
});
export default Register;
