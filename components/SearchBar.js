import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder="search by city"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Feather name="search" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    textAlign: "center",
    width: "70%",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  iconStyle: {
    fontSize: 35,
    marginLeft: 5,
    color: "white",
  },
});

export default SearchBar;
