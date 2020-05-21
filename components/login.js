import React, { useState } from "react";
import * as SQLite from 'expo-sqlite';
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
import {checkUser, insertUser} from "../database/db";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const userHandler = () => {};

  const checkUsernameHandler = (name) => {
    setUserName(name.replace(/[^a-zA-Z0-9]/g, ""));
  };

  const passwordHandler = (password) => {
    setPassword(password);
  };

  const onSubmitChecked= async () => {
    try {
      const dbResult = await checkUser(userName);
      console.log(dbResult.rows._array.password);
      navigation.navigate("Register");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Welcome to WeatherApp" />
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Login</Text>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-person" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={checkUsernameHandler}
              value={userName}
              maxLength={20}
            />
          </Card>
          <Card style={styles.inputContainer}>
            <Ionicons name="md-lock" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              maxLength={15}
              secureTextEntry={true}
              onChangeText={passwordHandler}
            />
          </Card>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="SIGN In"
                onPress={() => navigation.navigate("Weather")}
                color="#010124"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="SIGN UP"
                //onPress={() => navigation.navigate("Register")}
                  onPress={onSubmitChecked}
                color="#010124"
              />
            </View>
          </View>
          <Text>userName : {userName}</Text>
          <Text>Password : {password}</Text>
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
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  text: {
    fontSize: 20,
    color: "white",
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
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default Login;
